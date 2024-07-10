import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import QuestionCreatorLayout from "./layouts/QuestionCreatorLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/question-list" />
          <Route path="/question-creator" element={<QuestionCreatorLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
