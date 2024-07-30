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
    queryFn: async () => findQuestion({ slug }),
    retry: false,
  });
  if (findQuestionApiCall.status === "error") {
    return <NotFoundPage />;
  }
  if (findQuestionApiCall.isLoading || !findQuestionApiCall.data) {
    return (
      <LoadingOverlay visible={true} overlayProps={{ radius: "sm", blur: 2 }} />
    );
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
