package config

import (
	"os"
	"strconv"
)

type Config struct {
	PortNumber                      uint64
	QuestionServiceConnectionString string
	FrontendServiceConnectionString string
	JwtSecret                       string
	AuthDbHost                      string
	AuthDbName                      string
	AuthDbPortNumber                uint64
	AuthDbUser                      string
	AuthDbPassword                  string
}

func New() *Config {
	portNumber, err := strconv.ParseUint(os.Getenv("PORT_NUMBER"), 10, 32)
	if err != nil {
		panic(err.Error())
	}
	authDbPortNumber, err := strconv.ParseUint(os.Getenv("AUTH_DB_PORT_NUMBER"), 10, 32)
	if err != nil {
		panic(err.Error())
	}
	return &Config{
		PortNumber:                      portNumber,
		QuestionServiceConnectionString: os.Getenv("QUESTION_SERVICE_CONNECTION_STRING"),
		FrontendServiceConnectionString: os.Getenv("FRONTEND_SERVICE_CONNECTION_STRING"),
		JwtSecret:                       os.Getenv("JWT_SECRET"),
		AuthDbHost:                      os.Getenv("AUTH_DB_HOST"),
		AuthDbName:                      os.Getenv("AUTH_DB_NAME"),
		AuthDbPortNumber:                authDbPortNumber,
		AuthDbUser:                      os.Getenv("AUTH_DB_USER"),
		AuthDbPassword:                  os.Getenv("AUTH_DB_PASSWORD"),
	}
}
