import categoriesToArray from "./categoriesToArray";

const processUserInput = ({
  questionTitle,
  markdownText,
  categories,
  complexity,
}: {
  questionTitle: string;
  markdownText: string;
  categories: string;
  complexity: string;
}) => {
  return {
    title: questionTitle,
    description: markdownText.trim(),
    categories: categoriesToArray(categories),
    complexity,
  };
};

export default processUserInput;
