// package: net.steve
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as example_pb from "./example_pb";

interface IExampleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    unaryCall: IExampleService_IunaryCall;
    serverStreamCall: IExampleService_IserverStreamCall;
    clientStreamCall: IExampleService_IclientStreamCall;
    bidirectionalStreamCall: IExampleService_IbidirectionalStreamCall;
}

interface IExampleService_IunaryCall extends grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage> {
    path: "/net.steve.Example/unaryCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<example_pb.ServerMessage>;
}
interface IExampleService_IserverStreamCall extends grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage> {
    path: "/net.steve.Example/serverStreamCall";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<example_pb.ServerMessage>;
}
interface IExampleService_IclientStreamCall extends grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage> {
    path: "/net.steve.Example/clientStreamCall";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<example_pb.ServerMessage>;
}
interface IExampleService_IbidirectionalStreamCall extends grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage> {
    path: "/net.steve.Example/bidirectionalStreamCall";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<example_pb.ServerMessage>;
}

export const ExampleService: IExampleService;

export interface IExampleServer extends grpc.UntypedServiceImplementation {
    unaryCall: grpc.handleUnaryCall<example_pb.ClientMessage, example_pb.ServerMessage>;
    serverStreamCall: grpc.handleServerStreamingCall<example_pb.ClientMessage, example_pb.ServerMessage>;
    clientStreamCall: grpc.handleClientStreamingCall<example_pb.ClientMessage, example_pb.ServerMessage>;
    bidirectionalStreamCall: grpc.handleBidiStreamingCall<example_pb.ClientMessage, example_pb.ServerMessage>;
}

export interface IExampleClient {
    unaryCall(request: example_pb.ClientMessage, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    unaryCall(request: example_pb.ClientMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    unaryCall(request: example_pb.ClientMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    serverStreamCall(request: example_pb.ClientMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ServerMessage>;
    serverStreamCall(request: example_pb.ClientMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ServerMessage>;
    clientStreamCall(callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    clientStreamCall(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    clientStreamCall(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    clientStreamCall(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    bidirectionalStreamCall(): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
    bidirectionalStreamCall(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
    bidirectionalStreamCall(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
}

export class ExampleClient extends grpc.Client implements IExampleClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public unaryCall(request: example_pb.ClientMessage, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    public unaryCall(request: example_pb.ClientMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    public unaryCall(request: example_pb.ClientMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    public serverStreamCall(request: example_pb.ClientMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ServerMessage>;
    public serverStreamCall(request: example_pb.ClientMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ServerMessage>;
    public clientStreamCall(callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    public clientStreamCall(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    public clientStreamCall(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    public clientStreamCall(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ServerMessage) => void): grpc.ClientWritableStream<example_pb.ClientMessage>;
    public bidirectionalStreamCall(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
    public bidirectionalStreamCall(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
}
