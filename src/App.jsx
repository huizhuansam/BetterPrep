import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Container, CssBaseline, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { createRoot } from "react-dom/client";

import LoginForm from "./LoginForm";
import LogoBlink from "./LogoBlink";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box disableGutters alignItems="center">
        <Container maxWidth="false" disableGutters height="100vh">
          <Stack
            justifyContent="space-evenly"
            alignItems="center"
            height="100vh"
            direction="row"
            divider={
              <Divider orientation="vertical" flexItem variant="middle" />
            }
          >
            <LogoBlink />
            <LoginForm />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
