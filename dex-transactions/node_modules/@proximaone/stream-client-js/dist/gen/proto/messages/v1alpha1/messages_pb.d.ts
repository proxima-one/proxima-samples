// package: messages.v1alpha1
// file: proto/messages/v1alpha1/messages.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class MessageHeader extends jspb.Message {
  getUndo(): boolean;
  setUndo(value: boolean): MessageHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeader.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MessageHeader
  ): MessageHeader.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: MessageHeader,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeader;
  static deserializeBinaryFromReader(
    message: MessageHeader,
    reader: jspb.BinaryReader
  ): MessageHeader;
}

export namespace MessageHeader {
  export type AsObject = {
    undo: boolean;
  };
}

export class StreamMessage extends jspb.Message {
  getId(): string;
  setId(value: string): StreamMessage;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): MessageHeader | undefined;
  setHeader(value?: MessageHeader): StreamMessage;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): StreamMessage;
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): StreamMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamMessage
  ): StreamMessage.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StreamMessage,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessage;
  static deserializeBinaryFromReader(
    message: StreamMessage,
    reader: jspb.BinaryReader
  ): StreamMessage;
}

export namespace StreamMessage {
  export type AsObject = {
    id: string;
    header?: MessageHeader.AsObject;
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    payload: Uint8Array | string;
  };
}

export class GetNextMessagesRequest extends jspb.Message {
  getStreamId(): string;
  setStreamId(value: string): GetNextMessagesRequest;
  getLastMessageId(): string;
  setLastMessageId(value: string): GetNextMessagesRequest;
  getCount(): number;
  setCount(value: number): GetNextMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextMessagesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNextMessagesRequest
  ): GetNextMessagesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetNextMessagesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetNextMessagesRequest;
  static deserializeBinaryFromReader(
    message: GetNextMessagesRequest,
    reader: jspb.BinaryReader
  ): GetNextMessagesRequest;
}

export namespace GetNextMessagesRequest {
  export type AsObject = {
    streamId: string;
    lastMessageId: string;
    count: number;
  };
}

export class GetNextMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<StreamMessage>;
  setMessagesList(value: Array<StreamMessage>): GetNextMessagesResponse;
  addMessages(value?: StreamMessage, index?: number): StreamMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextMessagesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNextMessagesResponse
  ): GetNextMessagesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: GetNextMessagesResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetNextMessagesResponse;
  static deserializeBinaryFromReader(
    message: GetNextMessagesResponse,
    reader: jspb.BinaryReader
  ): GetNextMessagesResponse;
}

export namespace GetNextMessagesResponse {
  export type AsObject = {
    messagesList: Array<StreamMessage.AsObject>;
  };
}

export class StreamMessagesRequest extends jspb.Message {
  getStreamId(): string;
  setStreamId(value: string): StreamMessagesRequest;
  getLastMessageId(): string;
  setLastMessageId(value: string): StreamMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessagesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamMessagesRequest
  ): StreamMessagesRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StreamMessagesRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessagesRequest;
  static deserializeBinaryFromReader(
    message: StreamMessagesRequest,
    reader: jspb.BinaryReader
  ): StreamMessagesRequest;
}

export namespace StreamMessagesRequest {
  export type AsObject = {
    streamId: string;
    lastMessageId: string;
  };
}

export class StreamMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<StreamMessage>;
  setMessagesList(value: Array<StreamMessage>): StreamMessagesResponse;
  addMessages(value?: StreamMessage, index?: number): StreamMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessagesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamMessagesResponse
  ): StreamMessagesResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: StreamMessagesResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessagesResponse;
  static deserializeBinaryFromReader(
    message: StreamMessagesResponse,
    reader: jspb.BinaryReader
  ): StreamMessagesResponse;
}

export namespace StreamMessagesResponse {
  export type AsObject = {
    messagesList: Array<StreamMessage.AsObject>;
  };
}
