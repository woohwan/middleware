generated file

- .py: service descriptor
- .pyi: interface file

```
protoc --proto_path=proto addressBook.proto --python_out=src --pyi_out=src
```
