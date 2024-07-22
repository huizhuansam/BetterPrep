import validator from "validator";

const validateFormData = ({
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
  return (
    !validator.isEmpty(questionTitle.trim()) &&
    !validator.isEmpty(markdownText.trim()) &&
    !validator.isEmpty(categories.trim()) &&
    !validator.isEmpty(complexity.trim())
  );
};

export default validateFormData;
