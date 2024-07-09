import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    // ensures ui takes up entire width of viewport
    // ensures child elements are horizontally centered
    <Container maxWidth={false} disableGutters>
      <Outlet />
    </Container>
  );
};

export default BaseLayout;
