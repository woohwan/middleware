package main

import (
	pb "auth-ms/auth.utils/auth"
	"context"
	"flag"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)
func main() {
	var (
		addr = flag.String("addr", "localhost:50051", "the address to connect to")
	)

	// create connection to server
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()

	// create client
	client := pb.NewAuthClient(conn)

	// create context
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	
	req := pb.AuthenticationRequest{Token: "my secret number"}
	res, err := client.Authenticate(ctx, &req)
	if err != nil {
		log.Fatalf("could not get response: %v", err)
	}

	log.Printf("Received Message: %v ", res)
}