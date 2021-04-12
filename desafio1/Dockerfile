FROM golang:1.16.3-alpine as bin
WORKDIR /go/src
COPY main.go .
COPY index.html .
RUN GOOS=linux go build main.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=bin /go/src/main .
COPY --from=bin /go/src/index.html .
CMD ["./main"]