package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/huizhuansam/BetterPrep/config"
	"github.com/huizhuansam/BetterPrep/database"
	"github.com/huizhuansam/BetterPrep/model"
	"github.com/huizhuansam/BetterPrep/router"
)

var configuration config.Config

func init() {
	configuration = *config.New()
	database.ConnectDB(configuration)
	database.DB.AutoMigrate(&model.User{})
}

func main() {
	app := fiber.New()
	// TODO: configure CORS for production
	app.Use(cors.New(cors.Config{
		AllowOrigins:     configuration.FrontendServiceConnectionString,
		AllowMethods:     "GET,POST,PUT,DELETE",
		AllowCredentials: true,
	}))
	router.SetupRoutes(app)
	log.Fatal(app.Listen(fmt.Sprintf(":%d", configuration.PortNumber)))
}
