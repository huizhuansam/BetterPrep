package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/huizhuansam/BetterPrep/router"
)

func main() {
	app := fiber.New()
	// TODO: configure CORS for production
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
		AllowMethods: "GET,POST,PUT,DELETE",
		// AllowHeaders: "Content-Type,Authorization",
	}))
	router.SetupRoutes(app)
	log.Fatal(app.Listen(":4000"))
}
