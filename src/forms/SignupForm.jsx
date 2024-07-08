import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Card,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import validator from "validator";

import BaseButton from "../buttons/BaseButton";

const SignupForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormCompleted =
    !validator.isEmpty(emailAddress) &&
    !validator.isEmpty(username) &&
    !validator.isEmpty(password) &&
    !validator.isEmpty(confirmPassword);
  const isUsernameValid =
    validator.isLength(username, { min: 1 }) &&
    validator.isAlphanumeric(username);
  const isPasswordsMatch = password === confirmPassword;
  const isPasswordValid = validator.isStrongPassword(password);
  const isEmailValid = validator.isEmail(emailAddress);
  const isFormInputValid =
    isFormCompleted &&
    isPasswordsMatch &&
    isPasswordValid &&
    isEmailValid &&
    isUsernameValid;

  const handleInputEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInputConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((isShow) => !isShow);
  };

  const handleSignUp = () => {
    if (!isFormCompleted) {
      return;
    }
    const credentials = { emailAddress, username, password };
    console.log(credentials);
  };

  return (
    <Card sx={{ padding: 2 }} variant="outlined">
      <Stack spacing={1} alignItems="center" justifyContent="center">
        <Typography variant="h5" padding={1} sx={{ fontWeight: "bold" }}>
          Sign Up
        </Typography>
        <TextField
          fullWidth
          label="email address"
          size="small"
          error={!isEmailValid}
          helperText={isEmailValid ? " " : "invalid email address"}
          onChange={handleInputEmailAddress}
        />
        <TextField
          fullWidth
          label="username"
          size="small"
          error={!isUsernameValid}
          helperText={isUsernameValid ? " " : "username must be alphanumeric"}
          onChange={handleInputUsername}
        />
        <TextField
          fullWidth
          label="password"
          size="small"
          error={!isPasswordValid}
          helperText={isPasswordValid ? " " : "weak password"}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={togglePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleInputPassword}
        />
        <TextField
          fullWidth
          label="re-type password"
          size="small"
          type={showPassword ? "text" : "password"}
          onChange={handleInputConfirmPassword}
          error={!isPasswordsMatch}
          helperText={isPasswordsMatch ? " " : "passwords do not match"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={togglePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <BaseButton
          displayText="Continue"
          disabled={!isFormInputValid}
          onClick={handleSignUp}
        />
        <Divider flexItem />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Link href="#" variant="body2" underline="none">
            forgot password
          </Link>
          <Link
            // modifies MUI Link to use react-router Link API
            component={RouterLink}
            to="/login"
            variant="body2"
            underline="none"
          >
            log in
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SignupForm;
