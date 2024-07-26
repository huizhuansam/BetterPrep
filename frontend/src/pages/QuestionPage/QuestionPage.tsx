import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import findQuestion from "../../api/findQuestion";
import QuestionPageContent from "./QuestionPageContent";

const QuestionPage = () => {
  const { slug } = useParams() as { slug: string };

  const findQuestionApiCall = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      try {
        return await findQuestion(slug);
      } catch (error) {
        return {};
      }
    },
  });

  const question = findQuestionApiCall.data;
  if (!question) {
    // TODO: serve 404 page
    return <></>;
  }

  return <QuestionPageContent question={question} />;
};

export default QuestionPage;
