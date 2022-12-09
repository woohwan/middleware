// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_net_steve_ClientMessage(arg) {
  if (!(arg instanceof example_pb.ClientMessage)) {
    throw new Error('Expected argument of type net.steve.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_net_steve_ClientMessage(buffer_arg) {
  return example_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_net_steve_ServerMessage(arg) {
  if (!(arg instanceof example_pb.ServerMessage)) {
    throw new Error('Expected argument of type net.steve.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_net_steve_ServerMessage(buffer_arg) {
  return example_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleService = exports.ExampleService = {
  unaryCall: {
    path: '/net.steve.Example/unaryCall',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_net_steve_ClientMessage,
    requestDeserialize: deserialize_net_steve_ClientMessage,
    responseSerialize: serialize_net_steve_ServerMessage,
    responseDeserialize: deserialize_net_steve_ServerMessage,
  },
  serverStreamCall: {
    path: '/net.steve.Example/serverStreamCall',
    requestStream: false,
    responseStream: true,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_net_steve_ClientMessage,
    requestDeserialize: deserialize_net_steve_ClientMessage,
    responseSerialize: serialize_net_steve_ServerMessage,
    responseDeserialize: deserialize_net_steve_ServerMessage,
  },
  clientStreamCall: {
    path: '/net.steve.Example/clientStreamCall',
    requestStream: true,
    responseStream: false,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_net_steve_ClientMessage,
    requestDeserialize: deserialize_net_steve_ClientMessage,
    responseSerialize: serialize_net_steve_ServerMessage,
    responseDeserialize: deserialize_net_steve_ServerMessage,
  },
  bidirectionalStreamCall: {
    path: '/net.steve.Example/bidirectionalStreamCall',
    requestStream: true,
    responseStream: true,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_net_steve_ClientMessage,
    requestDeserialize: deserialize_net_steve_ClientMessage,
    responseSerialize: serialize_net_steve_ServerMessage,
    responseDeserialize: deserialize_net_steve_ServerMessage,
  },
};

exports.ExampleClient = grpc.makeGenericClientConstructor(ExampleService);
