import addressBook_pb2
from google.protobuf.json_format import MessageToJson

with open('addressbook_proto.bin','rb') as f:
  addressBook = addressBook_pb2.AddressBook()
  addressBook.ParseFromString(f.read())
  json_str = MessageToJson(addressBook)
  print(json_str)

""" write
with open('addressbook_proto_py.bin','wb') as f:
  f.write(addressBook.SerializeToString())
"""