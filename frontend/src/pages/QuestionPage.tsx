import { Badge, Card, Divider, Group, Pill, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import findQuestion from "../api/findQuestion";

const QuestionPage = () => {
  const { urlId } = useParams() as { urlId: string };
  const findQuestionApiCall = useQuery({
    queryKey: [urlId],
    queryFn: async () => {
      try {
        return await findQuestion(urlId);
      } catch (error) {
        return {};
      }
    },
  });
  const question = findQuestionApiCall.data;
  if (!question) {
    // TODO: serve 404 page
    return <></>;
  }

  const {
    title,
    description,
    categories,
    complexity,
  }: {
    title: string;
    description: string;
    categories: Array<string>;
    complexity: "easy" | "medium" | "hard";
  } = question;
  const complexityToColorMap: Map<string, string> = new Map([
    ["easy", "green"],
    ["medium", "yellow"],
    ["hard", "red"],
  ]);
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section inheritPadding py="xs">
        <Group justify="space-between">
          <Title>{title}</Title>
          <Badge color={complexityToColorMap.get(complexity)}>
            {complexity}
          </Badge>
        </Group>
      </Card.Section>
      <Divider />
      <Card.Section inheritPadding py="xs">
        <Markdown>{description}</Markdown>
      </Card.Section>
      <Divider />
      <Card.Section inheritPadding py="xs">
        <Group>
          <Text>Categories:</Text>
          <Pill.Group>
            {categories.map((category: any, categoryIndex: number) => (
              <Pill key={categoryIndex}>{category}</Pill>
            ))}
          </Pill.Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default QuestionPage;
