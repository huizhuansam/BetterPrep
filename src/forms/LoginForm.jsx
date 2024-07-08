import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
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

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isFormCompleted =
    !validator.isEmpty(username) && !validator.isEmpty(password);

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((isShow) => !isShow);
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
        <TextField
          fullWidth
          label="username"
          size="small"
          onChange={handleInputUsername}
        />
        <TextField
          fullWidth
          label="password"
          type={showPassword ? "text" : "password"}
          size="small"
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
        <Button
          fullWidth
          disableElevation
          disableRipple
          variant="contained"
          disabled={!isFormCompleted}
          onClick={handleLogin}
        >
          Continue
        </Button>
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
