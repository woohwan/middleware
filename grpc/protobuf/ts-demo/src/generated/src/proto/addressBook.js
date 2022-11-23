"use strict";
exports.__esModule = true;
exports.AddressBook = exports.Person_PhoneNumber = exports.Person = exports.person_PhoneTypeToJSON = exports.person_PhoneTypeFromJSON = exports.Person_PhoneType = exports.protobufPackage = void 0;
/* eslint-disable */
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "tutorial";
var Person_PhoneType;
(function (Person_PhoneType) {
    Person_PhoneType[Person_PhoneType["MOBILE"] = 0] = "MOBILE";
    Person_PhoneType[Person_PhoneType["HOME"] = 1] = "HOME";
    Person_PhoneType[Person_PhoneType["WORK"] = 2] = "WORK";
    Person_PhoneType[Person_PhoneType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Person_PhoneType = exports.Person_PhoneType || (exports.Person_PhoneType = {}));
function person_PhoneTypeFromJSON(object) {
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
exports.person_PhoneTypeFromJSON = person_PhoneTypeFromJSON;
function person_PhoneTypeToJSON(object) {
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
exports.person_PhoneTypeToJSON = person_PhoneTypeToJSON;
function createBasePerson() {
    return { name: "", phones: [] };
}
exports.Person = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (var _i = 0, _a = message.phones; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Person_PhoneNumber.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerson();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.phones.push(exports.Person_PhoneNumber.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            phones: Array.isArray(object === null || object === void 0 ? void 0 : object.phones) ? object.phones.map(function (e) { return exports.Person_PhoneNumber.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.phones) {
            obj.phones = message.phones.map(function (e) { return (e ? exports.Person_PhoneNumber.toJSON(e) : undefined); });
        }
        else {
            obj.phones = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePerson();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.phones = ((_b = object.phones) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Person_PhoneNumber.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePerson_PhoneNumber() {
    return { phoneNumber: "", phoneType: 0 };
}
exports.Person_PhoneNumber = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.phoneNumber !== "") {
            writer.uint32(10).string(message.phoneNumber);
        }
        if (message.phoneType !== 0) {
            writer.uint32(16).int32(message.phoneType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePerson_PhoneNumber();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.phoneNumber = reader.string();
                    break;
                case 2:
                    message.phoneType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
            phoneType: isSet(object.phoneType) ? person_PhoneTypeFromJSON(object.phoneType) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
        message.phoneType !== undefined && (obj.phoneType = person_PhoneTypeToJSON(message.phoneType));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePerson_PhoneNumber();
        message.phoneNumber = (_a = object.phoneNumber) !== null && _a !== void 0 ? _a : "";
        message.phoneType = (_b = object.phoneType) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseAddressBook() {
    return { people: [] };
}
exports.AddressBook = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.people; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Person.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddressBook();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.people.push(exports.Person.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return { people: Array.isArray(object === null || object === void 0 ? void 0 : object.people) ? object.people.map(function (e) { return exports.Person.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.people) {
            obj.people = message.people.map(function (e) { return (e ? exports.Person.toJSON(e) : undefined); });
        }
        else {
            obj.people = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddressBook();
        message.people = ((_a = object.people) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Person.fromPartial(e); })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
