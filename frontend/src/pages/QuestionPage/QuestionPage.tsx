import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import findQuestion from "../../api/findQuestion";
import QuestionPageContent from "./QuestionPageContent";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { LoadingOverlay } from "@mantine/core";

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
  if (findQuestionApiCall.isLoading) {
    return (
      <LoadingOverlay visible={true} overlayProps={{ radius: "sm", blur: 2 }} />
    );
  }
  if (!findQuestionApiCall.data) {
    return <></>;
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
