package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/huizhuansam/BetterPrep/handler"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")

	// auth
	authRouter := api.Group("/auth")
	authRouter.Post("/signup", handler.Signup)

	// question
	questionRouter := api.Group("/questions")
	questionRouter.Post("/", handler.AddQuestion)
	questionRouter.Get("/", handler.GetQuestions)
	questionRouter.Get("/:slug", handler.GetQuestion)
}
