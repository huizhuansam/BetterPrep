import {
  NavLink,
  AppShell,
  Burger,
  Group,
  Avatar,
  Center,
  Container,
  Space,
} from "@mantine/core";
import { ExitIcon } from "@radix-ui/react-icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

import LogoStatic from "../assets/LogoStatic";
import NavTabs from "../navigations/NavTabs";

const AppLayout = () => {
  const navigate = useNavigate();
  const currPath: string = useLocation().pathname;

  const [opened, { toggle }] = useDisclosure();

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
            <Burger opened={opened} onClick={toggle} size="sm" />
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
            toggle();
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
        />
      </AppShell.Aside>
    </AppShell>
  );
};

export default AppLayout;
