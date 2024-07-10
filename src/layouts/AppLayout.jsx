import { ActionIcon, AppShell, Group } from "@mantine/core";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Outlet } from "react-router-dom";

import LogoStatic from "../assets/LogoStatic";
import NavTabs from "../navigations/NavTabs";

const AppLayout = () => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <LogoStatic />
          <NavTabs />
          <ActionIcon variant="default">
            <HamburgerMenuIcon />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;
