### https://users.cs.cf.ac.uk/dave/C/node34.html
```
To compile the remote rprintmsg example:

compile the protocol defined in msg.x: rpcgen msg.x.
This generates the header files (msg.h), client stub (msg_clnt.c), and server stub (msg_svc.c).

compile the client executable:
 cc rprintmsg.c msg_clnt.c -o rprintmsg -lnsl
compile the server executable:
 cc msg_proc.c msg_svc.c -o msg_server -lnsl
 ```