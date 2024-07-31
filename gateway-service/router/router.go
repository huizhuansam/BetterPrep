package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/huizhuansam/BetterPrep/handler"
	"github.com/huizhuansam/BetterPrep/middleware"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")

	// auth
	authRouter := api.Group("/auth")
	authRouter.Post("/signup", handler.Signup)
	authRouter.Post("/login", handler.Login)

	// question
	questionRouter := api.Group("/questions")
	questionRouter.Post("/", middleware.Protected(), handler.AddQuestion)
	questionRouter.Get("/", middleware.Protected(), handler.GetQuestions)
	questionRouter.Get("/:slug", middleware.Protected(), handler.GetQuestion)
}
