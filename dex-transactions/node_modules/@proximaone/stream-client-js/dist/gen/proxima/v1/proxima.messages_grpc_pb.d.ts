// package: proxima.streamapis.v1alpha1
// file: proxima/v1/proxima.messages.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proxima_v1_proxima_messages_pb from "../../proxima/v1/proxima.messages_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IProximaStreamsServiceService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getNextMessages: IProximaStreamsServiceService_IGetNextMessages;
  streamMessages: IProximaStreamsServiceService_IStreamMessages;
}

interface IProximaStreamsServiceService_IGetNextMessages
  extends grpc.MethodDefinition<
    proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    proxima_v1_proxima_messages_pb.GetNextMessagesResponse
  > {
  path: "/proxima.streamapis.v1alpha1.ProximaStreamsService/GetNextMessages";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<proxima_v1_proxima_messages_pb.GetNextMessagesRequest>;
  requestDeserialize: grpc.deserialize<proxima_v1_proxima_messages_pb.GetNextMessagesRequest>;
  responseSerialize: grpc.serialize<proxima_v1_proxima_messages_pb.GetNextMessagesResponse>;
  responseDeserialize: grpc.deserialize<proxima_v1_proxima_messages_pb.GetNextMessagesResponse>;
}
interface IProximaStreamsServiceService_IStreamMessages
  extends grpc.MethodDefinition<
    proxima_v1_proxima_messages_pb.StreamMessagesRequest,
    proxima_v1_proxima_messages_pb.StreamMessagesResponse
  > {
  path: "/proxima.streamapis.v1alpha1.ProximaStreamsService/StreamMessages";
  requestStream: false;
  responseStream: true;
  requestSerialize: grpc.serialize<proxima_v1_proxima_messages_pb.StreamMessagesRequest>;
  requestDeserialize: grpc.deserialize<proxima_v1_proxima_messages_pb.StreamMessagesRequest>;
  responseSerialize: grpc.serialize<proxima_v1_proxima_messages_pb.StreamMessagesResponse>;
  responseDeserialize: grpc.deserialize<proxima_v1_proxima_messages_pb.StreamMessagesResponse>;
}

export const ProximaStreamsServiceService: IProximaStreamsServiceService;

export interface IProximaStreamsServiceServer
  extends grpc.UntypedServiceImplementation {
  getNextMessages: grpc.handleUnaryCall<
    proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    proxima_v1_proxima_messages_pb.GetNextMessagesResponse
  >;
  streamMessages: grpc.handleServerStreamingCall<
    proxima_v1_proxima_messages_pb.StreamMessagesRequest,
    proxima_v1_proxima_messages_pb.StreamMessagesResponse
  >;
}

export interface IProximaStreamsServiceClient {
  getNextMessages(
    request: proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: proxima_v1_proxima_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getNextMessages(
    request: proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: proxima_v1_proxima_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  getNextMessages(
    request: proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: proxima_v1_proxima_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  streamMessages(
    request: proxima_v1_proxima_messages_pb.StreamMessagesRequest,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proxima_v1_proxima_messages_pb.StreamMessagesResponse>;
  streamMessages(
    request: proxima_v1_proxima_messages_pb.StreamMessagesRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proxima_v1_proxima_messages_pb.StreamMessagesResponse>;
}

export class ProximaStreamsServiceClient
  extends grpc.Client
  implements IProximaStreamsServiceClient
{
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  );
  public getNextMessages(
    request: proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: proxima_v1_proxima_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getNextMessages(
    request: proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: proxima_v1_proxima_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public getNextMessages(
    request: proxima_v1_proxima_messages_pb.GetNextMessagesRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: proxima_v1_proxima_messages_pb.GetNextMessagesResponse
    ) => void
  ): grpc.ClientUnaryCall;
  public streamMessages(
    request: proxima_v1_proxima_messages_pb.StreamMessagesRequest,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proxima_v1_proxima_messages_pb.StreamMessagesResponse>;
  public streamMessages(
    request: proxima_v1_proxima_messages_pb.StreamMessagesRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>
  ): grpc.ClientReadableStream<proxima_v1_proxima_messages_pb.StreamMessagesResponse>;
}
