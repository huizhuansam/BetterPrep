import { Outlet } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const RouteGuard = ({ preventRender }: { preventRender: boolean }) => {
  return preventRender ? <NotFoundPage /> : <Outlet />;
};

export default RouteGuard;
