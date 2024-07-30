FROM golang:1.22.5-alpine

RUN adduser -D golang

RUN mkdir /home/golang/code

WORKDIR /home/golang/code

USER golang

RUN go install github.com/air-verse/air@latest

COPY --chown=golang:golang ./ ./

CMD ["air"]