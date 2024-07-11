import { Card, Pill, Table, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const QuestionListLayout = () => {
  const navigateTo = useNavigate();
  const questionList = JSON.parse(localStorage.getItem("questionList") || "[]");
  const rows = questionList.map((question: any, questionIndex: number) => {
    const id = questionIndex + 1;
    return (
      <Table.Tr key={id} onClick={() => navigateTo(`/questions/${id}`)}>
        <Table.Td>{id + ". " + question.title}</Table.Td>
        <Table.Td>{question.complexity}</Table.Td>
        <Table.Td>
          <Pill.Group>
            {question.categories.map((category: any, categoryIndex: number) => (
              <Pill key={categoryIndex}>{category}</Pill>
            ))}
          </Pill.Group>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section inheritPadding py="xs">
        <Title>Questions</Title>
      </Card.Section>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Complexity</Table.Th>
            <Table.Th>Categories</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Card>
  );
};

export default QuestionListLayout;
