import { StreamClient } from "@proximaone/stream-client-js";
import { map } from "rxjs";

async function main() {
  const client = new StreamClient("streamdb.cluster.prod.proxima.one:443");

  const blockHeadersStream = "eth-main-headers";

  // fetch first 1000 block header events
  const firstBlockHeaders = await client.getNextMessages(
    blockHeadersStream,
    {messageCount: 1000},
  );

  console.log(`Fetched first ${firstBlockHeaders.messagesList.length} messages`);

  // continue reactively consuming stream messages starting from last fetched message

  // rxjs's Observable<T>
  const ethBlockHeaderStream = client
    .streamMessages(blockHeadersStream, {
      latest: firstBlockHeaders.messagesList[firstBlockHeaders.messagesList.length-1].id,
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

  ethBlockHeaderStream.subscribe(x => console.log(x));
}

function decodeJson(binary: Uint8Array | string): any {
  const buffer =
    typeof binary == "string"
      ? Buffer.from(binary, "base64")
      : Buffer.from(binary);
  return JSON.parse(buffer.toString("utf8"));
}

main().catch(err => console.error(err));
