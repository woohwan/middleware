# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: addressBook.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11\x61\x64\x64ressBook.proto\x12\x08tutorial\"\xc4\x01\n\x06Person\x12\x0c\n\x04name\x18\x01 \x01(\t\x12,\n\x06phones\x18\x02 \x03(\x0b\x32\x1c.tutorial.Person.PhoneNumber\x1aQ\n\x0bPhoneNumber\x12\x13\n\x0bphoneNumber\x18\x01 \x01(\t\x12-\n\tphoneType\x18\x02 \x01(\x0e\x32\x1a.tutorial.Person.PhoneType\"+\n\tPhoneType\x12\n\n\x06MOBILE\x10\x00\x12\x08\n\x04HOME\x10\x01\x12\x08\n\x04WORK\x10\x02\"/\n\x0b\x41\x64\x64ressBook\x12 \n\x06people\x18\x01 \x03(\x0b\x32\x10.tutorial.Personb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'addressBook_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _PERSON._serialized_start=32
  _PERSON._serialized_end=228
  _PERSON_PHONENUMBER._serialized_start=102
  _PERSON_PHONENUMBER._serialized_end=183
  _PERSON_PHONETYPE._serialized_start=185
  _PERSON_PHONETYPE._serialized_end=228
  _ADDRESSBOOK._serialized_start=230
  _ADDRESSBOOK._serialized_end=277
# @@protoc_insertion_point(module_scope)