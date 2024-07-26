package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func main() {
	// SETUP
	QUESTION_SERVICE_HOSTNAME := os.Getenv("QUESTION_SERVICE_HOSTNAME")
	if len(QUESTION_SERVICE_HOSTNAME) < 1 {
		// todo: proper error handling for environment variables
		// hostnames must be defined in prod
		QUESTION_SERVICE_HOSTNAME = "http://localhost:3000"
	}
	FRONTEND_SERVICE_HOSTNAME := os.Getenv("FRONTEND_SERVICE_HOSTNAME")
	if len(FRONTEND_SERVICE_HOSTNAME) < 1 {
		FRONTEND_SERVICE_HOSTNAME = "http://localhost:5173"
	}

	app := fiber.New()
	// todo: configure CORS for production
	// should only allow HTTP(S) requests from frontend
	app.Use(cors.New(cors.Config{
		AllowOrigins: FRONTEND_SERVICE_HOSTNAME,
	}))

	api := app.Group("/api")

	api.Get("/questions", func(c *fiber.Ctx) error {
		url := QUESTION_SERVICE_HOSTNAME + "/questions"
		if err := proxy.Do(c, url); err != nil {
			return err
		}
		c.Response().Header.Set("Access-Control-Allow-Origin", FRONTEND_SERVICE_HOSTNAME)
		return nil
	})

	api.Get("/questions/:slug", func(c *fiber.Ctx) error {
		slug := c.Params("slug")
		url := QUESTION_SERVICE_HOSTNAME + "/questions/" + slug
		if err := proxy.Do(c, url); err != nil {
			return err
		}
		c.Response().Header.Set("Access-Control-Allow-Origin", FRONTEND_SERVICE_HOSTNAME)
		return nil
	})

	api.Post("/questions", func(c *fiber.Ctx) error {
		url := QUESTION_SERVICE_HOSTNAME + "/questions"
		if err := proxy.Do(c, url); err != nil {
			return err
		}
		c.Response().Header.Set("Access-Control-Allow-Origin", FRONTEND_SERVICE_HOSTNAME)
		return nil
	})

	app.Listen(":4000")
}
