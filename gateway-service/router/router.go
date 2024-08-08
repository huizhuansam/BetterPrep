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
	authRouter.Use(middleware.Protected()).Post("/logout", handler.Logout)
	authRouter.Get("/me", handler.Me)

	// question
	questionRouter := api.Group("/questions").Use(middleware.Protected())
	questionRouter.Post("/", handler.AddQuestion)
	questionRouter.Get("/", handler.GetQuestions)
	questionRouter.Get("/:slug", handler.GetQuestion)
}
