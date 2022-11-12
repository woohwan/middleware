- compile
for client
```
rpcgen -C square.x
gcc -cc client.c -o client.o
gcc -c square_clnt.c -o square_clnt.o
gcc -c squre_xdr.c -o square_xdr.o
gcc -o client client.o square_clnt.o square_xdr.o -l nsl
```

for server
```
gcc -c server.c -o server.o
gcc -c square_svc.c -o square_svc.o
gcc -o server server.o square_svc.o square_xdr.o -lnsl
```