package handler

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Signup(c *fiber.Ctx) error {
	var checkUserExists = func(username string, emailAddress string) error {
		return nil
	}
	var addUserToDb = func(emailAddress string, username string, hashedPassword []byte) error {
		return nil
	}
	credentials := struct {
		EmailAddress string `json:"emailAddress" validate:"required,email"`
		Username     string `json:"username" validate:"required"`
		Password     string `json:"password" validate:"required,min=6,max=72"`
	}{}
	if err := c.BodyParser(&credentials); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	if err := validator.New().Struct(credentials); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	if err := checkUserExists(credentials.EmailAddress, credentials.Username); err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("User already exists")
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(credentials.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}
	if err := addUserToDb(credentials.EmailAddress, credentials.Username, hashedPassword); err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}
	return c.SendStatus(fiber.StatusCreated)
}

func Login(c *fiber.Ctx) error {
	var getHashedPasswordFromDb = func(username string) ([]byte, error) {
		return []byte{}, nil
	}
	credentials := struct {
		Username string `json:"username" validate:"required"`
		Password string `json:"password" validate:"required"`
	}{}
	if err := c.BodyParser(&credentials); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	if err := validator.New().Struct(credentials); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	hashedPassword, err := getHashedPasswordFromDb(credentials.Username)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	if err := bcrypt.CompareHashAndPassword(hashedPassword, []byte(credentials.Password)); err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString(err.Error())
	}
	return c.Status(fiber.StatusOK).JSON(credentials.Username)
}
