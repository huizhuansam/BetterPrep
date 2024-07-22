import { Pill, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type RowProps = {
  questionList: Array<any>;
};

const QuestionListRows = ({ questionList }: RowProps) => {
  const navigateTo = useNavigate();
  return (
    <>
      {questionList.map((question: any) => {
        const { complexity, title, categories, urlId } = question;
        return (
          <Table.Tr onClick={() => navigateTo(`/questions/${urlId}`)}>
            <Table.Td>{title}</Table.Td>
            <Table.Td>{complexity}</Table.Td>
            <Table.Td>
              <Pill.Group>
                {categories.map((category: any, categoryIndex: number) => (
                  <Pill key={categoryIndex}>{category}</Pill>
                ))}
              </Pill.Group>
            </Table.Td>
          </Table.Tr>
        );
      })}
    </>
  );
};

export default QuestionListRows;
