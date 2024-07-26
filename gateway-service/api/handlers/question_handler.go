package handlers

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
)

var QUESTION_SERVICE_HOSTNAME = os.Getenv("QUESTION_SERVICE_HOSTNAME")
var FRONTEND_SERVICE_HOSTNAME = os.Getenv("FRONTEND_SERVICE_HOSTNAME")

func GetQuestions(c *fiber.Ctx) error {
	url := QUESTION_SERVICE_HOSTNAME + "/questions"
	if err := proxy.Do(c, url); err != nil {
		return err
	}
	c.Response().Header.Set("Access-Control-Allow-Origin", FRONTEND_SERVICE_HOSTNAME)
	return nil

}

func GetQuestion(c *fiber.Ctx) error {
	slug := c.Params("slug")
	url := QUESTION_SERVICE_HOSTNAME + "/questions/" + slug
	if err := proxy.Do(c, url); err != nil {
		return err
	}
	c.Response().Header.Set("Access-Control-Allow-Origin", FRONTEND_SERVICE_HOSTNAME)
	return nil
}

func AddQuestion(c *fiber.Ctx) error {
	url := QUESTION_SERVICE_HOSTNAME + "/questions"
	if err := proxy.Do(c, url); err != nil {
		return err
	}
	c.Response().Header.Set("Access-Control-Allow-Origin", FRONTEND_SERVICE_HOSTNAME)
	return nil
}
