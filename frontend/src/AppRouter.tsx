import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import QuestionCreatorPage from "./pages/QuestionCreatorPage/QuestionCreatorPage";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import QuestionPage from "./pages/QuestionPage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/questions/:slug" element={<QuestionPage />} />
          <Route path="/questions" element={<QuestionListPage />} />
          <Route path="/question-creator" element={<QuestionCreatorPage />} />
          <Route path="/my-profile" element={<MyProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
