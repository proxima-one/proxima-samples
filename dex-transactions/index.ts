 import {StreamClient} from "@proximaone/stream-client-js"
 import { map, from, groupBy } from "rxjs";
 import _ from "lodash"
import BSON from "bson"

//  Event Handler Function
function txsForAccount(data: any) {
        let txData = data.payload 
        let txId = data.id
        if (txData.univ3PoolLog.data.type == "Swap" && (txData.univ3PoolLog.data.recipient == account || txData.univ3PoolLog.data.sender == account)) {
            accountTxDict[txId] =  txData
        }
}

function txsForPool(data: any) {
    let txData = data.payload
        if (txData.univ3PoolLog.pool.address == poolAddress) {
            poolTxDict[data.id] = txData
        }
}

var txsByPoolDict: { [name: string]: Array<any> } = {}
function txsByPool(data: any) {
    let txData = data.payload
    if (!txsByPoolDict[txData.univ3PoolLog.pool.address]) {
        txsByPoolDict[txData.univ3PoolLog.pool.address] = new Array()
    }
        txsByPoolDict[txData.univ3PoolLog.pool.address].push(txData)
}

var txsByAccountDict: { [name: string]: Array<any> } = {}
function txsByAccount(data: any) {
    let txData = data.payload
    if (txData.univ3PoolLog.data.type == "Swap") {
        if (!txsByAccountDict[txData.univ3PoolLog.data.recipient]) {
          txsByAccountDict[txData.univ3PoolLog.data.recipient] = new Array()
        }
        if (!txsByAccountDict[txData.univ3PoolLog.data.sender]) {
          txsByAccountDict[txData.univ3PoolLog.data.sender] = new Array()
        }
        txsByAccountDict[txData.univ3PoolLog.data.recipient].push(txData)
        txsByAccountDict[txData.univ3PoolLog.data.sender].push(txData)
    }
}


var txsByTimeframeDict: { [timestamp: number]: Array<any> } = {}
function txsByTimeframe(data: any) {
  let txData = data.payload
  let timeframe = data.timestamp.seconds - (data.timestamp.seconds % 300)
  if (!txsByTimeframeDict[timeframe]) {
      txsByTimeframeDict[timeframe] = new Array()
  }
      txsByTimeframeDict[timeframe].push(txData)
}

//https://liihuu.github.io/KLineChart/


const account = '0x6c6bc977e13df9b0de53b251522280bb72383700'
var accountTxDict: { [name: string]: any } = {}

const poolAddress = '0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8'
var poolTxDict: { [name: string]: any } = {}


async function main() {
    const client = new StreamClient("streamdb.cluster.prod.proxima.one:443");

    const multiplefiStreamName = "multiplefi";
  
    // fetch first 1000 block header events
    const multiplefiStreamFirst = await client.getNextMessages(
      multiplefiStreamName,
      {messageCount: 1000},
    );
  
    // continue reactively consuming stream messages starting from last fetched message
  
    // rxjs's Observable<T>
    const multiplefiStream = client
      .streamMessages(multiplefiStreamName, {
        latest: multiplefiStreamFirst.messagesList[multiplefiStreamFirst.messagesList.length-1].id,
      })
      .pipe(
        map(msg => {  
          return {
            payload: decodeJson(msg.payload),
            id: msg.id, // event id, can be used to continue streaming
            undo: msg.header?.undo == true,
            timestamp: msg.timestamp,
          };
        })
      );
  
    multiplefiStream.subscribe(x => {
        txsForAccount(x)
        txsForPool(x)
        txsByPool(x)
        txsByAccount(x)
        txsByTimeframe(x)
    });
}




function decodeJson(binary: Uint8Array | string): any {
    const buffer =
      typeof binary == "string"
        ? Buffer.from(binary, "base64")
        : Buffer.from(binary);
    return JSON.parse(buffer.toString("utf8"));
  }
  
  main().catch(err => console.error(err));