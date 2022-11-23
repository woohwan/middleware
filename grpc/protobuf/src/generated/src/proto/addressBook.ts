/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "tutorial";

export interface Person {
  name: string;
  phones: Person_PhoneNumber[];
}

export enum Person_PhoneType {
  MOBILE = 0,
  HOME = 1,
  WORK = 2,
  UNRECOGNIZED = -1,
}

export function person_PhoneTypeFromJSON(object: any): Person_PhoneType {
  switch (object) {
    case 0:
    case "MOBILE":
      return Person_PhoneType.MOBILE;
    case 1:
    case "HOME":
      return Person_PhoneType.HOME;
    case 2:
    case "WORK":
      return Person_PhoneType.WORK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Person_PhoneType.UNRECOGNIZED;
  }
}

export function person_PhoneTypeToJSON(object: Person_PhoneType): string {
  switch (object) {
    case Person_PhoneType.MOBILE:
      return "MOBILE";
    case Person_PhoneType.HOME:
      return "HOME";
    case Person_PhoneType.WORK:
      return "WORK";
    case Person_PhoneType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Person_PhoneNumber {
  phoneNumber: string;
  phoneType: Person_PhoneType;
}

export interface AddressBook {
  people: Person[];
}

function createBasePerson(): Person {
  return { name: "", phones: [] };
}

export const Person = {
  encode(message: Person, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.phones) {
      Person_PhoneNumber.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Person {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.phones.push(Person_PhoneNumber.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Person {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      phones: Array.isArray(object?.phones) ? object.phones.map((e: any) => Person_PhoneNumber.fromJSON(e)) : [],
    };
  },

  toJSON(message: Person): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.phones) {
      obj.phones = message.phones.map((e) => (e ? Person_PhoneNumber.toJSON(e) : undefined));
    } else {
      obj.phones = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Person>, I>>(object: I): Person {
    const message = createBasePerson();
    message.name = object.name ?? "";
    message.phones = object.phones?.map((e) => Person_PhoneNumber.fromPartial(e)) || [];
    return message;
  },
};

function createBasePerson_PhoneNumber(): Person_PhoneNumber {
  return { phoneNumber: "", phoneType: 0 };
}

export const Person_PhoneNumber = {
  encode(message: Person_PhoneNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phoneNumber !== "") {
      writer.uint32(10).string(message.phoneNumber);
    }
    if (message.phoneType !== 0) {
      writer.uint32(16).int32(message.phoneType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Person_PhoneNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerson_PhoneNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.phoneNumber = reader.string();
          break;
        case 2:
          message.phoneType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Person_PhoneNumber {
    return {
      phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
      phoneType: isSet(object.phoneType) ? person_PhoneTypeFromJSON(object.phoneType) : 0,
    };
  },

  toJSON(message: Person_PhoneNumber): unknown {
    const obj: any = {};
    message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
    message.phoneType !== undefined && (obj.phoneType = person_PhoneTypeToJSON(message.phoneType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Person_PhoneNumber>, I>>(object: I): Person_PhoneNumber {
    const message = createBasePerson_PhoneNumber();
    message.phoneNumber = object.phoneNumber ?? "";
    message.phoneType = object.phoneType ?? 0;
    return message;
  },
};

function createBaseAddressBook(): AddressBook {
  return { people: [] };
}

export const AddressBook = {
  encode(message: AddressBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.people) {
      Person.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.people.push(Person.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddressBook {
    return { people: Array.isArray(object?.people) ? object.people.map((e: any) => Person.fromJSON(e)) : [] };
  },

  toJSON(message: AddressBook): unknown {
    const obj: any = {};
    if (message.people) {
      obj.people = message.people.map((e) => (e ? Person.toJSON(e) : undefined));
    } else {
      obj.people = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddressBook>, I>>(object: I): AddressBook {
    const message = createBaseAddressBook();
    message.people = object.people?.map((e) => Person.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
