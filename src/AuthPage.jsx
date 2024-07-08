import { Box, Container, Stack, Divider } from "@mui/material";

import LogoBlink from "./LogoBlink";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPage = ({ isLogin }) => {
  return (
    <Box disableGutters alignItems="center">
      <Container maxWidth="false" disableGutters height="100vh">
        <Stack
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
          direction="row"
          divider={<Divider orientation="vertical" flexItem variant="middle" />}
        >
          <LogoBlink />
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthPage;
