import { Container, Divider, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import LogoBlink from "../assets/LogoBlink";

const AuthLayout = () => {
  return (
    // constraints content to fit inside a maximum width
    <Container disableGutters maxWidth="lg">
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
  );
};

export default AuthLayout;
