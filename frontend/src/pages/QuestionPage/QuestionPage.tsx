import { LoadingOverlay } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import findQuestion from "../../api/findQuestion";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import QuestionPageContent from "./QuestionPageContent";

const QuestionPage = () => {
  const { slug } = useParams() as { slug: string };
  const findQuestionApiCall = useQuery({
    queryKey: ["questions", slug],
    queryFn: async () => {
      const question = await findQuestion(slug);
      if (!question.ok) {
        throw Error(question.status.toString());
      }
      return question.json();
    },
    retry: false,
  });

  if (findQuestionApiCall.isLoading) {
    return (
      <LoadingOverlay visible={true} overlayProps={{ radius: "sm", blur: 2 }} />
    );
  }

  if (findQuestionApiCall.error) {
    return <NotFoundPage />;
  }

  const { title, description, categories, complexity } =
    findQuestionApiCall.data;
  return (
    <QuestionPageContent
      title={title}
      description={description}
      categories={categories}
      complexity={complexity}
    />
  );
};

export default QuestionPage;
