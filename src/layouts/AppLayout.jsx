import { Outlet } from "react-router-dom";
import NavBar from "../navigations/NavBar";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
