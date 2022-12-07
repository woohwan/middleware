// Original file: ../proto/example.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  ClientMessage as _net_steve_ClientMessage,
  ClientMessage__Output as _net_steve_ClientMessage__Output,
} from "./ClientMessage";
import type {
  ServerMessage as _net_steve_ServerMessage,
  ServerMessage__Output as _net_steve_ServerMessage__Output,
} from "./ServerMessage";

export interface ExampleClient extends grpc.Client {
  bidirectionalStreamCall(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_net_steve_ClientMessage, _net_steve_ServerMessage__Output>;
  bidirectionalStreamCall(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_net_steve_ClientMessage, _net_steve_ServerMessage__Output>;
  bidirectionalStreamCall(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_net_steve_ClientMessage, _net_steve_ServerMessage__Output>;
  bidirectionalStreamCall(
    options?: grpc.CallOptions
  ): grpc.ClientDuplexStream<_net_steve_ClientMessage, _net_steve_ServerMessage__Output>;

  clientStreamCall(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;
  clientStreamCall(
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientWritableStream<_net_steve_ClientMessage>;

  serverStreamCall(
    argument: _net_steve_ClientMessage,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_net_steve_ServerMessage__Output>;
  serverStreamCall(
    argument: _net_steve_ClientMessage,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_net_steve_ServerMessage__Output>;
  serverStreamCall(
    argument: _net_steve_ClientMessage,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_net_steve_ServerMessage__Output>;
  serverStreamCall(
    argument: _net_steve_ClientMessage,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_net_steve_ServerMessage__Output>;

  unaryCall(
    argument: _net_steve_ClientMessage,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
  unaryCall(
    argument: _net_steve_ClientMessage,
    callback: grpc.requestCallback<_net_steve_ServerMessage__Output>
  ): grpc.ClientUnaryCall;
}

export interface ExampleHandlers extends grpc.UntypedServiceImplementation {
  bidirectionalStreamCall: grpc.handleBidiStreamingCall<_net_steve_ClientMessage__Output, _net_steve_ServerMessage>;

  clientStreamCall: grpc.handleClientStreamingCall<_net_steve_ClientMessage__Output, _net_steve_ServerMessage>;

  serverStreamCall: grpc.handleServerStreamingCall<_net_steve_ClientMessage__Output, _net_steve_ServerMessage>;

  unaryCall: grpc.handleUnaryCall<_net_steve_ClientMessage__Output, _net_steve_ServerMessage>;
}

export interface ExampleDefinition extends grpc.ServiceDefinition {
  bidirectionalStreamCall: MethodDefinition<
    _net_steve_ClientMessage,
    _net_steve_ServerMessage,
    _net_steve_ClientMessage__Output,
    _net_steve_ServerMessage__Output
  >;
  clientStreamCall: MethodDefinition<
    _net_steve_ClientMessage,
    _net_steve_ServerMessage,
    _net_steve_ClientMessage__Output,
    _net_steve_ServerMessage__Output
  >;
  serverStreamCall: MethodDefinition<
    _net_steve_ClientMessage,
    _net_steve_ServerMessage,
    _net_steve_ClientMessage__Output,
    _net_steve_ServerMessage__Output
  >;
  unaryCall: MethodDefinition<
    _net_steve_ClientMessage,
    _net_steve_ServerMessage,
    _net_steve_ClientMessage__Output,
    _net_steve_ServerMessage__Output
  >;
}
