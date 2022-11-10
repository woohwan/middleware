###  GO 설치 및 환경변수 등록
```
wget https://go.dev/dl/go1.19.3.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.19.3.linux-amd64.tar.gz
```
```
echo "export GOROOT=/usr/local/go" >> ~/.bash_profile
echo "export GOPATH=$HOME/go" >> ~/.bash_profile
echo "export PATH=$PATH:$GOROOT/bin" >> ~/.bash_profile
source ~/.bash_profile
```

### Install the protocol compiler plugins for Go using the following commands
```
$ go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
$ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```
update PATH

### compile protobuf
protoc -I=../../protos --go_out=. --go-grpc_out=. hello.proto

src/ dir안에  helloword directory 아래에 stub가 만들어진다.
source 안에 import  하는 모듈은  domain/package 형식 ( 예:  import hello.com/helloworld)
- module 생성 (module name: hello.com)
cd helloworld
go mod init hello.com

- src dir에 module 생성
go mod init main

- src/go.mod   아래 내용 추가 (  local module 추가)
replace hello.com/helloworld v1.0.0 => ./helloworld

go mod tidy

- server 실행
go run server.go

- cliet 실행
go run client.go




