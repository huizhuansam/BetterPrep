import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import me from "../api/me";
import LoggedInUserContext from "../context/LoggedInUserContext";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm/SignupForm";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import HomePage from "../pages/HomePage/HomePage";
import MyProfilePage from "../pages/MyProfilePage/MyProfilePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfileEditorPage from "../pages/ProfileEditorPage/ProfileEditorPage";
import QuestionCreatorPage from "../pages/QuestionCreatorPage/QuestionCreatorPage";
import QuestionListPage from "../pages/QuestionListPage/QuestionListPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import AuthLoader from "./AuthLoader";
import RouteGuard from "./RouteGuard";

const AppRouter = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
  const meApiCall = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const user = await me();
      if (!user.user) {
        setLoggedInUser(null);
      } else {
        setLoggedInUser(user);
      }
      return user;
    },
  });
  const isRetrievingCredentials = meApiCall.isLoading;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<AuthLoader isVisible={isRetrievingCredentials} />}>
          <Route
            element={
              loggedInUser ? <Navigate to="/questions" /> : <AuthLayout />
            }
          >
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>
          <Route element={<RouteGuard preventRender={!loggedInUser} />}>
            <Route element={<AppLayout />}>
              <Route path="/questions/:slug" element={<QuestionPage />} />
              <Route path="/questions" element={<QuestionListPage />} />
              <Route
                path="/question-creator"
                element={<QuestionCreatorPage />}
              />
              <Route path="/my-profile" element={<MyProfilePage />} />
              <Route
                path="/my-profile/editor"
                element={<ProfileEditorPage />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
