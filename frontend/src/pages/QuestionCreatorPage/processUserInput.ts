import categoriesToArray from "./categoriesToArray";

const processUserInput = ({
  questionTitle,
  questionDescription,
  categories,
  complexity,
}: {
  questionTitle: string;
  questionDescription: string;
  categories: string;
  complexity: string;
}) => {
  return {
    title: questionTitle,
    description: questionDescription.trim(),
    categories: categoriesToArray(categories),
    complexity,
  };
};

export default processUserInput;
