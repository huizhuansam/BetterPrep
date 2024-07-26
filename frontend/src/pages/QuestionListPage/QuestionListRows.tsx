import { Pill, Table } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const QuestionListRows = ({ questionList }: { questionList: Array<any> }) => {
  const navigateTo = useNavigate();
  return (
    <>
      {questionList.map((question: any, questionIndex: number) => {
        const {
          complexity,
          title,
          categories,
          slug,
        }: {
          complexity: string;
          title: string;
          categories: string[];
          slug: string;
        } = question;
        return (
          <Table.Tr
            key={questionIndex}
            onClick={() => navigateTo(`/questions/${slug}`)}
          >
            <Table.Td>{title}</Table.Td>
            <Table.Td>{complexity}</Table.Td>
            <Table.Td>
              <Pill.Group>
                {categories.length < 1 ? (
                  <Pill>uncategorized</Pill>
                ) : (
                  categories.map((category: any, categoryIndex: number) => (
                    <Pill key={categoryIndex}>{category}</Pill>
                  ))
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
