# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: auth.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nauth.proto\x12\x04\x61uth\"&\n\x15\x41uthenticationRequest\x12\r\n\x05token\x18\x01 \x01(\t\">\n\x16\x41uthenticationResponse\x12\x0f\n\x07user_id\x18\x01 \x01(\x03\x12\x13\n\x0btoken_valid\x18\x02 \x01(\x08\x32Q\n\x04\x41uth\x12I\n\x0c\x41uthenticate\x12\x1b.auth.AuthenticationRequest\x1a\x1c.auth.AuthenticationResponseB\x11Z\x0f\x61uth.utils/authb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'auth_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\017auth.utils/auth'
  _AUTHENTICATIONREQUEST._serialized_start=20
  _AUTHENTICATIONREQUEST._serialized_end=58
  _AUTHENTICATIONRESPONSE._serialized_start=60
  _AUTHENTICATIONRESPONSE._serialized_end=122
  _AUTH._serialized_start=124
  _AUTH._serialized_end=205
# @@protoc_insertion_point(module_scope)
