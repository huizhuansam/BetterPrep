import { Pill, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";

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

export default QuestionListRows;
