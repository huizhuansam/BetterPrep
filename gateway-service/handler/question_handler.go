package handler

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/proxy"
	"github.com/huizhuansam/BetterPrep/config"
)

var configuration = config.New()

func GetQuestions(c *fiber.Ctx) error {
	url := configuration.QuestionServiceConnectionString + "/questions"
	if err := proxy.Do(c, url); err != nil {
		return err
	}
	return nil
}

func GetQuestion(c *fiber.Ctx) error {
	slug := c.Params("slug")
	url := configuration.QuestionServiceConnectionString + "/questions/" + slug
	if err := proxy.Do(c, url); err != nil {
		return err
	}
	return nil
}

func AddQuestion(c *fiber.Ctx) error {
	url := configuration.QuestionServiceConnectionString + "/questions"
	if err := proxy.Do(c, url); err != nil {
		return err
	}
	return nil
}
