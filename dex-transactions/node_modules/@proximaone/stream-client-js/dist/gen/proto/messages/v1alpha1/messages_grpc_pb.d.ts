// package: messages.v1alpha1
// file: proto/messages/v1alpha1/messages.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_messages_v1alpha1_messages_pb from "../../../proto/messages/v1alpha1/messages_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IMessagesServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getNextMessages: IMessagesServiceService_IGetNextMessages;
  streamMessages: IMessagesServiceService_IStreamMessages;
}

interface IMessagesServiceService_IGetNextMessages
  extends grpc.MethodDefinition<
    proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
  > {
  path: "/messages.v1alpha1.MessagesService/GetNextMessages";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest>;
  requestDeserialize: grpc.deserialize<proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest>;
  responseSerialize: grpc.serialize<proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse>;
  responseDeserialize: grpc.deserialize<proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse>;
}
interface IMessagesServiceService_IStreamMessages
  extends grpc.MethodDefinition<
    proto_messages_v1alpha1_messages_pb.StreamMessagesRequest,
    proto_messages_v1alpha1_messages_pb.StreamMessagesResponse
  > {
  path: "/messages.v1alpha1.MessagesService/StreamMessages";
  requestStream: false;
  responseStream: true;
  requestSerialize: grpc.serialize<proto_messages_v1alpha1_messages_pb.StreamMessagesRequest>;
  requestDeserialize: grpc.deserialize<proto_messages_v1alpha1_messages_pb.StreamMessagesRequest>;
  responseSerialize: grpc.serialize<proto_messages_v1alpha1_messages_pb.StreamMessagesResponse>;
  responseDeserialize: grpc.deserialize<proto_messages_v1alpha1_messages_pb.StreamMessagesResponse>;
}

export const MessagesServiceService: IMessagesServiceService;

export interface IMessagesServiceServer
  extends grpc.UntypedServiceImplementation {
  getNextMessages: grpc.handleUnaryCall<
    proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
  >;
  streamMessages: grpc.handleServerStreamingCall<
    proto_messages_v1alpha1_messages_pb.StreamMessagesRequest,
    proto_messages_v1alpha1_messages_pb.StreamMessagesResponse
  >;
}

export interface IMessagesServiceClient {
  getNextMessages(
    request: proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getNextMessages(
    request: proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getNextMessages(
    request: proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  streamMessages(
    request: proto_messages_v1alpha1_messages_pb.StreamMessagesRequest,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proto_messages_v1alpha1_messages_pb.StreamMessagesResponse>;
  streamMessages(
    request: proto_messages_v1alpha1_messages_pb.StreamMessagesRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proto_messages_v1alpha1_messages_pb.StreamMessagesResponse>;
}

export class MessagesServiceClient
  extends grpc.Client
  implements IMessagesServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getNextMessages(
    request: proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getNextMessages(
    request: proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getNextMessages(
    request: proto_messages_v1alpha1_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: proto_messages_v1alpha1_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public streamMessages(
    request: proto_messages_v1alpha1_messages_pb.StreamMessagesRequest,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proto_messages_v1alpha1_messages_pb.StreamMessagesResponse>;
  public streamMessages(
    request: proto_messages_v1alpha1_messages_pb.StreamMessagesRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proto_messages_v1alpha1_messages_pb.StreamMessagesResponse>;
}
