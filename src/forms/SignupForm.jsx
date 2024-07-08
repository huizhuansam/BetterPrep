import { Card, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import validator from "validator";

import AuthButton from "../buttons/AuthButton";
import EmailAddressField from "../inputs/EmailAddressField";
import PasswordField from "../inputs/PasswordField";
import UsernameField from "../inputs/UsernameField";

const SignupForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const isFormCompleted =
    !validator.isEmpty(emailAddress) &&
    !validator.isEmpty(username) &&
    !validator.isEmpty(password) &&
    !validator.isEmpty(retypedPassword);
  const isUsernameValid =
    validator.isLength(username, { min: 1 }) &&
    validator.isAlphanumeric(username);
  const isPasswordsMatch = password === retypedPassword;
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

  const handleRetypedPassword = (e) => {
    setRetypedPassword(e.target.value);
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
        <EmailAddressField
          helperText="invalid email address"
          error={!isEmailValid}
          emailAddress={emailAddress}
          onChange={handleInputEmailAddress}
        />
        <UsernameField
          helperText="username must be alphanumeric"
          username={username}
          error={!isUsernameValid}
          onChange={handleInputUsername}
        />
        <PasswordField
          label="password"
          helperText="weak password"
          password={password}
          error={!isPasswordValid}
          onChange={handleInputPassword}
        />
        <PasswordField
          label="re-type password"
          helperText="passwords do not match"
          password={retypedPassword}
          error={!isPasswordsMatch}
          onChange={handleRetypedPassword}
        />
        <AuthButton
          displayText="create account"
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
