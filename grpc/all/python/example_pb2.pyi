from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class ClientMessage(_message.Message):
    __slots__ = ["client_message"]
    CLIENT_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    client_message: str
    def __init__(self, client_message: _Optional[str] = ...) -> None: ...

class ServerMessage(_message.Message):
    __slots__ = ["server_message"]
    SERVER_MESSAGE_FIELD_NUMBER: _ClassVar[int]
    server_message: str
    def __init__(self, server_message: _Optional[str] = ...) -> None: ...
