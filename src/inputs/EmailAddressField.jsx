import TextField from "@mui/material/TextField";
import { useState } from "react";

const EmailAddressField = ({ emailAddress, onChange, error, helperText }) => {
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
      label="email address"
      value={emailAddress}
      onChange={onChange}
      error={error && isInFocus}
      helperText={error && isInFocus ? helperText : " "}
      onFocus={focus}
      onBlur={blur}
    />
  );
};

export default EmailAddressField;
