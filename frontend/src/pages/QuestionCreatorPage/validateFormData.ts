import validator from "validator";

const validateFormData = ({
  title,
  descriptionCharacterCount,
  complexity,
}: {
  title: string;
  descriptionCharacterCount: number;
  complexity: string;
}) => {
  return (
    descriptionCharacterCount > 0 &&
    !validator.isEmpty(title.trim()) &&
    !validator.isEmpty(complexity.trim())
  );
};

export default validateFormData;
