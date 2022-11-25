package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

	pb "auth-ms/auth.utils/auth"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 50051, "port to run the server on")
)

type server struct {
	pb.UnimplementedAuthServer
}

// extend the rpc service created in auth.proto
func (s *server) Authenticate(ctx context.Context, req *pb.AuthenticationRequest) (*pb.AuthenticationResponse, error) {
	token := req.GetToken()
	log.Printf("Received: %v", token)

	// add some logic to verify token
	return &pb.AuthenticationResponse{UserId: 1, TokenValid: true}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))

	if err != nil {
		log.Fatal("Unable to start the server on port", *port)
	}

	gprc_server := grpc.NewServer()
	pb.RegisterAuthServer(gprc_server, &server{})
	log.Println("Started server at", lis.Addr())

	if err := gprc_server.Serve(lis); err != nil {
		log.Fatalln("Failed to start server at", lis.Addr())
	}
}