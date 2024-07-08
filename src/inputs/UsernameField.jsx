import TextField from "@mui/material/TextField";
import { useState } from "react";

const UsernameField = ({ username, error, helperText, onChange }) => {
  const [isInFocus, setIsInFocus] = useState(false);

  const focus = () => {
    setIsInFocus(true);
  };

  const blur = () => {
    setIsInFocus(false);
  };

  return (
    <TextField
      fullWidth
      size="small"
      label="username"
      error={error && isInFocus}
      value={username}
      onChange={onChange}
      helperText={error && isInFocus ? helperText : " "}
      onFocus={focus}
      onBlur={blur}
    />
  );
};

export default UsernameField;
