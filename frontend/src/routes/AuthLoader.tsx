import { LoadingOverlay } from "@mantine/core";
import { Outlet } from "react-router-dom";

const AuthLoader = ({ isVisible }: { isVisible: boolean }) => {
  return isVisible ? <LoadingOverlay visible={isVisible} /> : <Outlet />;
};

export default AuthLoader;
