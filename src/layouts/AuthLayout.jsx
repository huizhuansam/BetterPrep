import { AppShell, Center, SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

import LogoBlink from "../assets/LogoBlink";

const AuthLayout = () => {
  const { height: viewportHeight, width: viewportWidth } = useViewportSize();

  return (
    <AppShell>
      <AppShell.Main>
        <Center h={viewportHeight}>
          <SimpleGrid cols={2} w={viewportWidth}>
            <Center>
              <LogoBlink />
            </Center>
            <Center>
              <Outlet />
            </Center>
          </SimpleGrid>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
};

export default AuthLayout;
