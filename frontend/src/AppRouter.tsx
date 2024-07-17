import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import QuestionCreatorPage from "./pages/QuestionCreatorPage";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/questions/:id" />
          <Route path="/questions" element={<QuestionListPage />} />
          <Route path="/question-creator" element={<QuestionCreatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
