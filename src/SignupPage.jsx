import { Box, Container, Stack, Divider } from "@mui/material";

import LogoBlink from "./LogoBlink";
import SignupForm from "./SignupForm";

const SignupPage = () => {
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
          <SignupForm />
        </Stack>
      </Container>
    </Box>
  );
};

export default SignupPage;
