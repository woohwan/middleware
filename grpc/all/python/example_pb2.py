# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: example.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\rexample.proto\x12\tnet.steve\"\'\n\rServerMessage\x12\x16\n\x0eserver_message\x18\x01 \x01(\t\"\'\n\rClientMessage\x12\x16\n\x0e\x63lient_message\x18\x01 \x01(\t2\xb9\x02\n\x07\x45xample\x12\x41\n\tunaryCall\x12\x18.net.steve.ClientMessage\x1a\x18.net.steve.ServerMessage\"\x00\x12J\n\x10serverStreamCall\x12\x18.net.steve.ClientMessage\x1a\x18.net.steve.ServerMessage\"\x00\x30\x01\x12J\n\x10\x63lientStreamCall\x12\x18.net.steve.ClientMessage\x1a\x18.net.steve.ServerMessage\"\x00(\x01\x12S\n\x17\x62idirectionalStreamCall\x12\x18.net.steve.ClientMessage\x1a\x18.net.steve.ServerMessage\"\x00(\x01\x30\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'example_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _SERVERMESSAGE._serialized_start=28
  _SERVERMESSAGE._serialized_end=67
  _CLIENTMESSAGE._serialized_start=69
  _CLIENTMESSAGE._serialized_end=108
  _EXAMPLE._serialized_start=111
  _EXAMPLE._serialized_end=424
# @@protoc_insertion_point(module_scope)