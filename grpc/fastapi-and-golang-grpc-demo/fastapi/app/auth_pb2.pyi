from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class AuthenticationRequest(_message.Message):
    __slots__ = ["token"]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    token: str
    def __init__(self, token: _Optional[str] = ...) -> None: ...

class AuthenticationResponse(_message.Message):
    __slots__ = ["token_valid", "user_id"]
    TOKEN_VALID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    token_valid: bool
    user_id: int
    def __init__(self, user_id: _Optional[int] = ..., token_valid: bool = ...) -> None: ...
