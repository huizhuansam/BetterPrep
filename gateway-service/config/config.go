package config

import "os"

type Config struct {
	QuestionServiceConnectionString string
	FrontendServiceConnectionString string
}

func New() *Config {
	return &Config{
		QuestionServiceConnectionString: os.Getenv("QUESTION_SERVICE_CONNECTION_STRING"),
		FrontendServiceConnectionString: os.Getenv("FRONTEND_SERVICE_CONNECTION_STRING"),
	}
}
