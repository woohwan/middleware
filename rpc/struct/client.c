#include "square.h"

int main(int argc, char** argv) {
  CLIENT *cl;
  square_in in;
  square_out *outp;

  if(argc != 3)
    printf("usage: client <hostname> <integer-value>");

  cl = clnt_create(argv[1], SQUARE_PROG, SQUARE_VERS, "tcp");

  in.arg1 = atol(argv[2]);
  if ((outp = squareproc_1(&in, cl)) == NULL)
    printf("%s, clnt_sperror(cl, argv[1");
  printf("result: %ld\n", outp->res1);
  exit(0);
}