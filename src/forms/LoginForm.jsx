import { Card, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import validator from "validator";

import AuthButton from "../buttons/AuthButton";
import PasswordField from "../inputs/PasswordField";
import UsernameField from "../inputs/UsernameField";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormCompleted =
    !validator.isEmpty(username) && !validator.isEmpty(password);

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const credentials = { username, password };
    console.log(credentials);
  };

  return (
    <Card sx={{ padding: 2 }} variant="outlined">
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Log In
        </Typography>
        <UsernameField username={username} onChange={handleInputUsername} />
        <PasswordField
          label="password"
          password={password}
          onChange={handleInputPassword}
        />
        <AuthButton
          displayText="continue"
          disabled={!isFormCompleted}
          onClick={handleLogin}
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
            to="/signup"
            variant="body2"
            underline="none"
          >
            sign up
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};

export default LoginForm;
