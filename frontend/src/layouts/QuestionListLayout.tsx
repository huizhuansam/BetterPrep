import { Card, Pill, Table, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import fetchAllQuestions from "../api/fetchAllQuestions";

type RowProps = {
  questionList: Array<any>;
};

const QuestionListRows = ({ questionList }: RowProps) => {
  const navigateTo = useNavigate();
  return (
    <>
      {questionList.map((question: any, questionIndex: number) => {
        const id = questionIndex + 1;
        return (
          <Table.Tr key={id} onClick={() => navigateTo(`/questions/${id}`)}>
            <Table.Td>{id + ". " + question.title}</Table.Td>
            <Table.Td>{question.complexity}</Table.Td>
            <Table.Td>
              <Pill.Group>
                {question.categories.map(
                  (category: any, categoryIndex: number) => (
                    <Pill key={categoryIndex}>{category}</Pill>
                  )
                )}
              </Pill.Group>
            </Table.Td>
          </Table.Tr>
        );
      })}
    </>
  );
};

const QuestionListLayout = () => {
  const questionApiCall = useQuery({
    queryKey: ["questions"],
    queryFn: fetchAllQuestions,
  });

  const questionList = questionApiCall.data || [];
  console.log(questionApiCall);

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

export default QuestionListLayout;
