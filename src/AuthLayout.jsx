import { Box, Container, Divider, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import LogoBlink from "./LogoBlink";

const AuthLayout = () => {
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
          <Outlet />
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthLayout;
