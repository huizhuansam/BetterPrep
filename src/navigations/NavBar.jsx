import { Create } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink } from "react-router-dom";
import LogoStatic from "../assets/LogoStatic";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ borderBottom: 1 }}
      color="transparent"
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <Box sx={{ ml: "auto" }}>
            <LogoStatic />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            <Button
              startIcon={<ListIcon />}
              disableElevation
              disableRipple
              component={RouterLink}
              // todo: link correct route
              to="#"
            >
              Question List
            </Button>
            <Button
              startIcon={<Create />}
              disableElevation
              disableRipple
              component={RouterLink}
              to="/question-creator"
            >
              Submit Question
            </Button>
          </Stack>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
