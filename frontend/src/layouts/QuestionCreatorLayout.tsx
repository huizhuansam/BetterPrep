import { useState } from "react";
import Markdown from "react-markdown";

import {
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  NativeSelect,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const QuestionCreatorLayout = () => {
  const navigateTo = useNavigate();
  const remainingViewportHeight = "calc(100vh - 60)";

  const [questionTitle, setQuestionTitle] = useState("");
  const [markdownText, setMarkdownText] = useState("");
  const [complexity, setComplexity] = useState("easy");
  const [categories, setCategories] = useState("");

  const isFormValid =
    !validator.isEmpty(questionTitle) &&
    !validator.isEmpty(markdownText) &&
    !validator.isEmpty(categories) &&
    !validator.isEmpty(complexity);

  const handleDiscard = () => {
    setQuestionTitle("");
    setMarkdownText("");
    setCategories("");
    setComplexity("easy");
  };

  const handleSubmit = () => {
    if (localStorage.getItem("questionList") === null) {
      localStorage.setItem("questionList", JSON.stringify([]));
    }
    const categoriesToArray = [
      ...new Set(
        categories
          .trim()
          .split(",")
          .filter((s) => !validator.isEmpty(s))
          .map((s) => s.trim())
      ),
    ];
    const question = {
      title: questionTitle,
      complexity,
      description: markdownText,
      categories: categoriesToArray,
    };
    const currQuestionList = [
      ...JSON.parse(localStorage.getItem("questionList") || "[]"),
      question,
    ];
    localStorage.setItem("questionList", JSON.stringify(currQuestionList));
    navigateTo("/questions");
  };

  return (
    <Container fluid style={{ height: remainingViewportHeight }}>
      <Grid grow align="stretch" style={{ flex: 1, overflow: "hidden" }}>
        <Grid.Col span={6}>
          <Center>
            <Title order={2}>Enter question here</Title>
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <Title order={2}>Preview</Title>
          </Center>
        </Grid.Col>
        <Grid.Col
          span={6}
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Stack align="stretch" style={{ flex: 1, overflow: "hidden" }}>
            <Card
              shadow="sm"
              padding="lg"
              withBorder
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Card.Section inheritPadding py="xs">
                <TextInput
                  value={questionTitle}
                  placeholder="Question title"
                  onChange={(e) => setQuestionTitle(e.target.value)}
                />
              </Card.Section>
              <Divider />
              <Card.Section inheritPadding py="xs">
                <Textarea
                  value={markdownText}
                  onChange={(e) => setMarkdownText(e.target.value)}
                  autosize
                  placeholder="Question description (Markdown supported)"
                />
              </Card.Section>
              <Divider />
              <Card.Section inheritPadding py="xs">
                <TextInput
                  value={categories}
                  placeholder="Add relevant categories; please delimit using commas (,)"
                  onChange={(e) => setCategories(e.target.value)}
                />
              </Card.Section>
              <Divider />
              <Card.Section inheritPadding py="xs">
                <NativeSelect
                  value={complexity}
                  label="Select suggested difficulty"
                  onChange={(e) => setComplexity(e.target.value)}
                  data={["easy", "medium", "hard"]}
                />
              </Card.Section>
            </Card>
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <Card style={{ width: "100%" }} withBorder padding="lg">
              <Card.Section inheritPadding py="xs">
                <Markdown>
                  {!validator.isEmpty(markdownText)
                    ? markdownText
                    : "*Your question description appears here*"}
                </Markdown>
              </Card.Section>
              <Card.Section inheritPadding py="xs">
                <Group align="center" grow>
                  <Button
                    color="green"
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    color="orange"
                    disabled={!isFormValid}
                    onClick={handleDiscard}
                  >
                    Discard
                  </Button>
                </Group>
              </Card.Section>
            </Card>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default QuestionCreatorLayout;
