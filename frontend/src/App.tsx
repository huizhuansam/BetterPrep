import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import "@mantine/tiptap/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import LoggedInUserContext from "./context/LoggedInUserContext";
import AppRouter from "./routes/AppRouter";
import { User } from "./types/APIResponsesTypes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // todo: adjust
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const loggedInUser = useState<User | null>(null);
  return (
    <LoggedInUserContext.Provider value={loggedInUser}>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <Notifications position="top-right" />
          <AppRouter />
        </QueryClientProvider>
      </MantineProvider>
    </LoggedInUserContext.Provider>
  );
};

export default App;
