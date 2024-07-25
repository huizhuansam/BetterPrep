import validator from "validator";

const validateFormData = ({
  title,
  descriptionCharacterCount,
  categories,
  complexity,
}: {
  title: string;
  descriptionCharacterCount: number;
  categories: string;
  complexity: string;
}) => {
  return (
    !validator.isEmpty(title.trim()) &&
    descriptionCharacterCount > 0 &&
    !validator.isEmpty(categories.trim()) &&
    !validator.isEmpty(complexity.trim())
  );
};

export default validateFormData;
