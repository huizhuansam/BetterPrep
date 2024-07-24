const processUserInput = ({
  questionTitle,
  questionDescription,
  categories,
  complexity,
}: {
  questionTitle: string;
  categories: string[];
  questionDescription: string;
  complexity: string;
}) => {
  return {
    title: questionTitle,
    description: questionDescription.trim(),
    categories,
    complexity,
  };
};

export default processUserInput;
