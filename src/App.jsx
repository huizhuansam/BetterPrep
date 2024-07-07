import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { createRoot } from "react-dom/client";

import LogoBlink from "./LogoBlink";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <Container maxWidth="false">
      <Stack
        justifyContent="space-evenly"
        alignItems="center"
        height="97vh"
        display="flex"
        direction="row"
        divider={<Divider orientation="vertical" flexItem variant="middle" />}
      >
        <LogoBlink />
        <LoginForm />
      </Stack>
    </Container>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
