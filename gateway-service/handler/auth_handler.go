package handler

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
)

func Signup(c *fiber.Ctx) error {
	payload := struct {
		EmailAddress string `json:"emailAddress" validate:"required,email"`
		Username     string `json:"username" validate:"required"`
		Password     string `json:"password" validate:"required"`
	}{}
	if err := c.BodyParser(&payload); err != nil {
		return err
	}
	validate := validator.New()
	if err := validate.Struct(payload); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	// TODO: write to db
	// TODO: generate JWT token
	// TODO: return JWT token
	return nil
}
