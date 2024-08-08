import {
  AppShell,
  Avatar,
  Burger,
  Container,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { ExitIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logout from "../api/logout";
import LogoStatic from "../assets/LogoStatic";
import LoggedInUserContext from "../context/LoggedInUserContext";
import NavTabs from "../navigations/NavTabs";

const AppLayout = () => {
  const navigateTo = useNavigate();
  const currPath: string = useLocation().pathname;

  const [opened, { toggle: toggleNavVisibility }] = useDisclosure();
  const [, setLoggedInUser] = useContext(LoggedInUserContext);

  const handleLogout = async () => {
    const response = await logout();
    if (!response.ok) {
      notifications.show({
        message: "Error: unable to log out",
        color: "red",
      });
      return;
    }
    setLoggedInUser(null);
    toggleNavVisibility();
    notifications.show({
      message: "Logged out",
      color: "green",
    });
    navigateTo("/login");
  };

  return (
    <AppShell
      header={{ height: 60 }}
      aside={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Container h="100%" style={{ maxWidth: "1200px" }}>
          <Group h="100%" px="md" justify="space-between">
            <LogoStatic />
            <NavTabs />
            <Burger opened={opened} onClick={toggleNavVisibility} size="sm" />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container style={{ maxWidth: "1200px" }}>
          <Outlet />
        </Container>
      </AppShell.Main>
      <AppShell.Aside>
        <NavLink
          rightSection={<Avatar size="md" />}
          label="My Profile"
          onClick={() => {
            toggleNavVisibility();
            navigateTo("/my-profile");
          }}
          active={currPath == "/my-profile"}
        />
        <NavLink
          rightSection={
            <Avatar size="md">
              <ExitIcon />
            </Avatar>
          }
          label="Log Out"
          onClick={async () => await handleLogout()}
        />
      </AppShell.Aside>
    </AppShell>
  );
};

export default AppLayout;
