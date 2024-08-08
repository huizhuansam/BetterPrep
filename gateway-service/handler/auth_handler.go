package handler

import (
	"fmt"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/huizhuansam/BetterPrep/database"
	"github.com/huizhuansam/BetterPrep/model"
	"golang.org/x/crypto/bcrypt"
)

func getUserByUsername(username string) (*model.User, error) {
	var user model.User
	if err := database.DB.Where(&model.User{Username: username}).First(&user).Error; err != nil {
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

func createToken(user *model.User) (string, error) {
	now := time.Now()
	// token valid for 1 hour
	validUntil := now.Add(time.Hour * 1).Unix()
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = user.Username
	claims["exp"] = validUntil
	secret := configuration.JwtSecret
	return token.SignedString([]byte(secret))
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
	token, err := createToken(&user)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}
	cookie := new(fiber.Cookie)
	cookie.Name = "token"
	cookie.Value = token
	cookie.HTTPOnly = true
	c.Cookie(cookie)
	return c.SendStatus(fiber.StatusOK)
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
	token, err := createToken(user)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
	}
	cookie := new(fiber.Cookie)
	cookie.Name = "token"
	cookie.Value = token
	cookie.HTTPOnly = true
	c.Cookie(cookie)
	return c.SendStatus(fiber.StatusOK)
}

func Logout(c *fiber.Ctx) error {
	cookie := new(fiber.Cookie)
	cookie.Name = "token"
	cookie.Value = ""
	cookie.HTTPOnly = true
	c.Cookie(cookie)
	return c.SendStatus(fiber.StatusOK)
}

func Me(c *fiber.Ctx) error {
	tokenString := c.Cookies("token")
	if len(tokenString) < 1 {
		return c.JSON(fiber.Map{
			"user": nil,
		})
	}
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		secret := configuration.JwtSecret
		return []byte(secret), nil
	})
	if err != nil {
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return c.SendStatus(fiber.StatusUnauthorized)
	}
	return c.JSON(fiber.Map{
		"user": fiber.Map{
			"username": claims["username"],
		},
	})
}
