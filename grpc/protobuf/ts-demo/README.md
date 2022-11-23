https://blog.mechanicalrock.io/2022/04/08/getting-started-with-protobufs-and-typescript.html

Compile the TypeScript You Will Use in Your Code
This is one of the bits that didn’t quite make sense when I was first trying to learn Protobufs.
There is some magic that’s needed to turn the .proto files into language specific code you can use within your project.

For this you need the protoc compiler. Download and install the prebuilt binary
On my Mac I downloaded protoc-x.xx.x-osx-x86_64.zip, unzipped and copied the protoc file in to my $PATH at /usr/local/bin/.
However, this only generates code for some languages. From that list we’re interested in JavaScript.
The bit that isn’t included with protoc is generating the Typescript types. For that you need a plugin for protoc like the ts-proto npm package.

Let’s start building. Start a TypeScript project and create an addressBook.proto file as above in the same project. Then run:

npm install ts-protoc-gen

```
protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_out="./src/generated" \
    src/proto/addressBook.proto
```

```
tsc test/addressBookMessage.test.ts
ts-node test/addressBookMessage.test.ts
```
