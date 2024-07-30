import { Badge, Card, Divider, Group, Pill, Text, Title } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import Image from "@tiptap/extension-image";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const QuestionPageContent = ({
  title,
  description,
  categories,
  complexity,
}: {
  title: string;
  description: string;
  categories: string[];
  complexity: "easy" | "medium" | "hard";
}) => {
  const complexityToColorMap: Map<string, string> = new Map([
    ["easy", "green"],
    ["medium", "yellow"],
    ["hard", "red"],
  ]);
  const descriptionViewer = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        allowBase64: true,
      }),
    ],
    editable: false,
    content: description,
  })!;
  return (
    <>
      <Card shadow="sm" padding="lg" withBorder>
        <Card.Section inheritPadding py="xs">
          <Group justify="space-between">
            <Title>{title}</Title>
            <Badge color={complexityToColorMap.get(complexity)}>
              {complexity}
            </Badge>
          </Group>
        </Card.Section>
        <Card.Section inheritPadding py="xs">
          <RichTextEditor editor={descriptionViewer}>
            <RichTextEditor.Content />
          </RichTextEditor>
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
    </>
  );
};

export default QuestionPageContent;
