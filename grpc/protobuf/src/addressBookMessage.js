"use strict";
exports.__esModule = true;
exports.serializeMsgToJson = exports.deserializeProtoToMsg = exports.serializeMsgToProto = exports.newAddressBookMsg = void 0;
var addressBook_1 = require("./generated/src/proto/addressBook");
function newAddressBookMsg() {
    var myAddressBook = {
        people: [
            {
                name: "Joe Blogs",
                phones: [
                    {
                        phoneNumber: "0123456789",
                        phoneType: addressBook_1.Person_PhoneType.MOBILE
                    },
                ]
            },
            {
                name: "Jane Smith",
                phones: [
                    {
                        phoneNumber: "0987654321",
                        phoneType: addressBook_1.Person_PhoneType.HOME
                    },
                ]
            },
        ]
    };
    return myAddressBook;
}
exports.newAddressBookMsg = newAddressBookMsg;
function serializeMsgToProto(myAddressBook) {
    return addressBook_1.AddressBook.encode(myAddressBook).finish();
}
exports.serializeMsgToProto = serializeMsgToProto;
function deserializeProtoToMsg(serializedMessage) {
    return addressBook_1.AddressBook.decode(serializedMessage);
}
exports.deserializeProtoToMsg = deserializeProtoToMsg;
function serializeMsgToJson(myAddressBook) {
    return addressBook_1.AddressBook.toJSON(myAddressBook);
}
exports.serializeMsgToJson = serializeMsgToJson;
