import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./AuthPage";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage isLogin={true} />} />
          <Route path="/signup" element={<AuthPage isLogin={false} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
