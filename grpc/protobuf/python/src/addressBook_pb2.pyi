from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AddressBook(_message.Message):
    __slots__ = ["people"]
    PEOPLE_FIELD_NUMBER: _ClassVar[int]
    people: _containers.RepeatedCompositeFieldContainer[Person]
    def __init__(self, people: _Optional[_Iterable[_Union[Person, _Mapping]]] = ...) -> None: ...

class Person(_message.Message):
    __slots__ = ["name", "phones"]
    class PhoneType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class PhoneNumber(_message.Message):
        __slots__ = ["phoneNumber", "phoneType"]
        PHONENUMBER_FIELD_NUMBER: _ClassVar[int]
        PHONETYPE_FIELD_NUMBER: _ClassVar[int]
        phoneNumber: str
        phoneType: Person.PhoneType
        def __init__(self, phoneNumber: _Optional[str] = ..., phoneType: _Optional[_Union[Person.PhoneType, str]] = ...) -> None: ...
    HOME: Person.PhoneType
    MOBILE: Person.PhoneType
    NAME_FIELD_NUMBER: _ClassVar[int]
    PHONES_FIELD_NUMBER: _ClassVar[int]
    WORK: Person.PhoneType
    name: str
    phones: _containers.RepeatedCompositeFieldContainer[Person.PhoneNumber]
    def __init__(self, name: _Optional[str] = ..., phones: _Optional[_Iterable[_Union[Person.PhoneNumber, _Mapping]]] = ...) -> None: ...
