package handler

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/huizhuansam/BetterPrep/database"
	"github.com/huizhuansam/BetterPrep/model"
	"golang.org/x/crypto/bcrypt"
)

func getUserByUsername(username string) (*model.User, error) {
	var user model.User
	if err := database.DB.Where(&model.User{Username: username}).First(user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func addUserToDb(user *model.User) error {
	if err := database.DB.Create(&user).Error; err != nil {
		return err
	}
	return nil
}

func Signup(c *fiber.Ctx) error {
	type SignupInput struct {
		EmailAddress string `json:"emailAddress" validate:"required,email"`
		Username     string `json:"username" validate:"required"`
		Password     string `json:"password" validate:"required,min=6,max=72"`
	}
	signupInput := new(SignupInput)
	if err := c.BodyParser(&signupInput); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	if err := validator.New().Struct(signupInput); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(signupInput.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}
	user := model.User{
		EmailAddress:   signupInput.EmailAddress,
		Username:       signupInput.Username,
		HashedPassword: hashedPassword,
	}
	if err := addUserToDb(&user); err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString("User aleady exists")
	}
	return c.SendStatus(fiber.StatusCreated)
}

func Login(c *fiber.Ctx) error {
	type LoginInput struct {
		Username string `json:"username" validate:"required"`
		Password string `json:"password" validate:"required"`
	}
	loginInput := new(LoginInput)
	if err := c.BodyParser(&loginInput); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	if err := validator.New().Struct(loginInput); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString(err.Error())
	}
	username := loginInput.Username
	user, err := getUserByUsername(username)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Incorrect credentials")
	}
	password := loginInput.Password
	if err := bcrypt.CompareHashAndPassword(user.HashedPassword, []byte(password)); err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Incorrect credentials")
	}
	return c.Status(fiber.StatusOK).JSON(username)
}
