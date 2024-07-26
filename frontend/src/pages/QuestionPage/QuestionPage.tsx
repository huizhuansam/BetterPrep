import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import findQuestion from "../../api/findQuestion";
import QuestionPageContent from "./QuestionPageContent";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const QuestionPage = () => {
  const { slug } = useParams() as { slug: string };

  const findQuestionApiCall = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      try {
        return await findQuestion(slug);
      } catch (error) {
        return null;
      }
    },
  });

  const question = findQuestionApiCall.data;
  if (!question) {
    return <NotFoundPage />;
  }
  return <QuestionPageContent question={question} />;
};

export default QuestionPage;
