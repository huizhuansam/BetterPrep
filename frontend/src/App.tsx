import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRouter from "./AppRouter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Notifications position="top-right" />
        <AppRouter />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
