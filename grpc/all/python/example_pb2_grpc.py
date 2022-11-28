# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import example_pb2 as example__pb2


class ExampleStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.unaryCall = channel.unary_unary(
                '/net.steve.Example/unaryCall',
                request_serializer=example__pb2.ClientMessage.SerializeToString,
                response_deserializer=example__pb2.ServerMessage.FromString,
                )
        self.serverStreamCall = channel.unary_stream(
                '/net.steve.Example/serverStreamCall',
                request_serializer=example__pb2.ClientMessage.SerializeToString,
                response_deserializer=example__pb2.ServerMessage.FromString,
                )
        self.clientStreamCall = channel.stream_unary(
                '/net.steve.Example/clientStreamCall',
                request_serializer=example__pb2.ClientMessage.SerializeToString,
                response_deserializer=example__pb2.ServerMessage.FromString,
                )
        self.bidirectionalStreamCall = channel.stream_stream(
                '/net.steve.Example/bidirectionalStreamCall',
                request_serializer=example__pb2.ClientMessage.SerializeToString,
                response_deserializer=example__pb2.ServerMessage.FromString,
                )


class ExampleServicer(object):
    """Missing associated documentation comment in .proto file."""

    def unaryCall(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def serverStreamCall(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def clientStreamCall(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def bidirectionalStreamCall(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ExampleServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'unaryCall': grpc.unary_unary_rpc_method_handler(
                    servicer.unaryCall,
                    request_deserializer=example__pb2.ClientMessage.FromString,
                    response_serializer=example__pb2.ServerMessage.SerializeToString,
            ),
            'serverStreamCall': grpc.unary_stream_rpc_method_handler(
                    servicer.serverStreamCall,
                    request_deserializer=example__pb2.ClientMessage.FromString,
                    response_serializer=example__pb2.ServerMessage.SerializeToString,
            ),
            'clientStreamCall': grpc.stream_unary_rpc_method_handler(
                    servicer.clientStreamCall,
                    request_deserializer=example__pb2.ClientMessage.FromString,
                    response_serializer=example__pb2.ServerMessage.SerializeToString,
            ),
            'bidirectionalStreamCall': grpc.stream_stream_rpc_method_handler(
                    servicer.bidirectionalStreamCall,
                    request_deserializer=example__pb2.ClientMessage.FromString,
                    response_serializer=example__pb2.ServerMessage.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'net.steve.Example', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Example(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def unaryCall(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/net.steve.Example/unaryCall',
            example__pb2.ClientMessage.SerializeToString,
            example__pb2.ServerMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def serverStreamCall(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/net.steve.Example/serverStreamCall',
            example__pb2.ClientMessage.SerializeToString,
            example__pb2.ServerMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def clientStreamCall(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/net.steve.Example/clientStreamCall',
            example__pb2.ClientMessage.SerializeToString,
            example__pb2.ServerMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def bidirectionalStreamCall(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/net.steve.Example/bidirectionalStreamCall',
            example__pb2.ClientMessage.SerializeToString,
            example__pb2.ServerMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
