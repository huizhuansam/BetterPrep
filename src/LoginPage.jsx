import { Box, Container, Stack, Divider } from "@mui/material";

import LoginForm from "./LoginForm";
import LogoBlink from "./LogoBlink";

const LoginPage = () => {
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
          <LoginForm />
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginPage;
