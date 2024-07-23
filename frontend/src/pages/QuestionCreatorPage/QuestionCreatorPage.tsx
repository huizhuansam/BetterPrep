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
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import Markdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { serializeError } from "serialize-error";
import validator from "validator";
import createQuestion from "../../api/createQuestion";
import processUserInput from "./processUserInput";
import validateFormData from "./validateFormData";

const QuestionCreatorPage = () => {
  const navigateTo = useNavigate();
  const remainingViewportHeight = "calc(100vh - 60)";

  const [questionTitle, setQuestionTitle] = useState("");
  const [markdownText, setMarkdownText] = useState("");
  const [complexity, setComplexity] = useState("easy");
  const [categories, setCategories] = useState("");

  const handleDiscard = () => {
    setQuestionTitle("");
    setMarkdownText("");
    setCategories("");
    setComplexity("easy");
  };

  const handleSubmit = async () => {
    try {
      await createQuestion(
        processUserInput({
          questionTitle,
          markdownText,
          categories,
          complexity,
        })
      );
      notifications.show({
        message: "Question submitted!",
      });
      navigateTo("/questions");
    } catch (error: any) {
      notifications.show({
        message: "Error: " + JSON.stringify(serializeError(error).message),
        color: "red",
      });
    }
  };

  const isFormValid = validateFormData({
    questionTitle,
    markdownText,
    categories,
    complexity,
  });

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

export default QuestionCreatorPage;