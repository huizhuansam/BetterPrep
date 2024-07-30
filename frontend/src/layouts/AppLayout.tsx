import {
  AppShell,
  Avatar,
  Burger,
  Container,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ExitIcon } from "@radix-ui/react-icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LogoStatic from "../assets/LogoStatic";
import NavTabs from "../navigations/NavTabs";

const AppLayout = () => {
  const navigate = useNavigate();
  const currPath: string = useLocation().pathname;

  const [opened, { toggle: toggleNavVisibility }] = useDisclosure();

  const handleLogout = () => {
    toggleNavVisibility();
    navigate("/login");
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
            navigate("/my-profile");
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
          onClick={handleLogout}
        />
      </AppShell.Aside>
    </AppShell>
  );
};

export default AppLayout;
