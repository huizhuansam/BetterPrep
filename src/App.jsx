import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import React from "react";

import AppRouter from "./AppRouter";

const App = () => {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
};

export default App;
