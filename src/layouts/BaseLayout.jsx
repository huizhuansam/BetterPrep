import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <Box alignItems="center">
      <Outlet />
    </Box>
  );
};

export default BaseLayout;
