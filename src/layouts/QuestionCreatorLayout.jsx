import React, { useState } from "react";
import Markdown from "react-markdown";

import {
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import validator from "validator";

const QuestionCreatorLayout = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [markdownText, setMarkdownText] = useState("");
  const remainingViewportHeight = "calc(100vh - 60)";

  const isFormValid =
    !validator.isEmpty(questionTitle) && !validator.isEmpty(markdownText);

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
                  placeholder="Question title"
                  onChange={(e) => setQuestionTitle(e.target.value)}
                />
              </Card.Section>
              <Divider />
              <Card.Section inheritPadding py="xs">
                <Textarea
                  onChange={(e) => setMarkdownText(e.target.value)}
                  autosize
                  placeholder="Question description (Markdown supported)"
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
                  <Button color="green" disabled={!isFormValid}>
                    Submit
                  </Button>
                  <Button color="orange" disabled={!isFormValid}>
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
