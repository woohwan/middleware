import {
  newAddressBookMsg,
  serializeMsgToProto,
  deserializeProtoToMsg,
  serializeMsgToJson,
} from "../src/addressBookMessage";
import { promises as fsPromises } from "fs";

const addressBook = newAddressBookMsg();
let addressbook_proto = serializeMsgToProto(addressBook);
fsPromises.writeFile("./addressbook_proto", addressbook_proto);

let addressbook_json = serializeMsgToJson(addressBook);
const address_book = JSON.stringify(addressbook_json);
fsPromises.writeFile("./addressbook.json", address_book);
