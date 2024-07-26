import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProfileEditorPage from "./pages/ProfileEditorPage/ProfileEditorPage";
import QuestionCreatorPage from "./pages/QuestionCreatorPage/QuestionCreatorPage";
import QuestionListPage from "./pages/QuestionListPage/QuestionListPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

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
          <Route path="/my-profile/editor" element={<ProfileEditorPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
