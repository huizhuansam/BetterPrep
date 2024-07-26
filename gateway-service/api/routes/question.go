package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/huizhuansam/BetterPrep/api/handlers"
)

func QuestionRouter(app fiber.Router) {
	app.Get("/questions", handlers.GetQuestions)
	app.Get("/questions/:slug", handlers.GetQuestion)
	app.Post("/questions", handlers.AddQuestion)
}
