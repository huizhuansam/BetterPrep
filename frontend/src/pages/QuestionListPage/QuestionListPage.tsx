import { Card, Table, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import findAllQuestions from "../../api/findAllQuestions";
import QuestionListRows from "./QuestionListRows";

const QuestionListPage = () => {
  const findAllQuestionsApiCall = useQuery({
    queryKey: ["questions"],
    queryFn: findAllQuestions,
  });
  const questionList = findAllQuestionsApiCall.data || [];

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
        <Table.Tbody>
          <QuestionListRows questionList={questionList} />
        </Table.Tbody>
      </Table>
    </Card>
  );
};

export default QuestionListPage;
