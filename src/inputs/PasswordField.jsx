import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const PasswordField = ({ password, onChange, error, label, helperText }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isInFocus, setIsInFocus] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((isVisible) => !isVisible);
  };

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
      label={label}
      value={password}
      onChange={onChange}
      error={error && isInFocus}
      type={isPasswordVisible ? "text" : "password"}
      helperText={error && isInFocus ? helperText : " "}
      onFocus={focus}
      onBlur={blur}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
