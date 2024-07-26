package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

func main() {
	QUESTION_SERVICE_HOSTNAME := os.Getenv("QUESTION_SERVICE_HOSTNAME")
	if len(QUESTION_SERVICE_HOSTNAME) < 1 {
		// todo: proper error handling for environment variables
		// hostnames must be defined in prod
		QUESTION_SERVICE_HOSTNAME = "http://localhost:3000/questions/"
	}
	app := fiber.New()
	// todo: configure CORS for production
	// should only allow HTTP(S) requests from frontend
	app.Use(cors.New()) // allows all origin

	api := app.Group("/api")

	api.Get("/questions", func(c *fiber.Ctx) error {
		// send GET request to question-service
		url := QUESTION_SERVICE_HOSTNAME
		if err := proxy.Do(c, url); err != nil {
			return err
		}
		// Remove Server header from response
		c.Response().Header.Del(fiber.HeaderServer)
		return nil
	})
	api.Get("/questions/:slug", func(c *fiber.Ctx) error {
		slug := c.Params("slug")
		url := QUESTION_SERVICE_HOSTNAME + "questions/" + slug
		if err := proxy.Do(c, url); err != nil {
			return err
		}
		c.Response().Header.Del(fiber.HeaderServer)
		return nil
	})
	api.Post("/questions", func(c *fiber.Ctx) error {
		url := QUESTION_SERVICE_HOSTNAME
		if err := proxy.Do(c, url); err != nil {
			return err
		}
		c.Response().Header.Del(fiber.HeaderServer)
		return nil
	})

	app.Listen(":4000")
}
