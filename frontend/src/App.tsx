import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";

import AppRouter from "./AppRouter";
import { Notifications } from "@mantine/notifications";

const App = () => {
  return (
    <MantineProvider>
      <Notifications position="top-right" />
      <AppRouter />
    </MantineProvider>
  );
};

export default App;
