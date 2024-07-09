import { AppBar, Toolbar, Box, Container } from "@mui/material";
import LogoStatic from "../assets/LogoStatic";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ borderBottom: 1 }}
      color="transparent"
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar variant="dense">
          <LogoStatic />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" edge="end" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>{" "}
      </Container>
    </AppBar>
  );
};

export default NavBar;
