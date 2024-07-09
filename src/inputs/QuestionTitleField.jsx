import { TextField } from "@mui/material";

const QuestionTitleField = ({ onChange, title }) => {
  return (
    <TextField
      size="small"
      label="question title"
      onChange={onChange}
      value={title}
    />
  );
};

export default QuestionTitleField;
