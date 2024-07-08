import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import BaseLayout from "./layouts/BaseLayout";

const App = () => {
  return (
    <>
      <CssBaseline /> {/* removes scrollbar and weird margin around page */}
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
