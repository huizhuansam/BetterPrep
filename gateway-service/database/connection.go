package database

import (
	"fmt"

	"github.com/huizhuansam/BetterPrep/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB(configuration config.Config) {
	dsn := fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		configuration.AuthDbHost,
		configuration.AuthDbPortNumber,
		configuration.AuthDbUser,
		configuration.AuthDbPassword,
		configuration.AuthDbName,
	)
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to auth database")
	}
}
