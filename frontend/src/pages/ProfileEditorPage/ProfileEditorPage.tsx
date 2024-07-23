import {
  Avatar,
  Button,
  Card,
  Center,
  Divider,
  Grid,
  Stack,
  Title,
  Text,
  TextInput,
  Group,
  Menu,
  Overlay,
  ActionIcon,
} from "@mantine/core";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const ProfileEditorPage = () => {
  const [visible, setVisible] = useState(true);
  const user = {
    username: "huizhuansam",
    accountCreatedAt: "1st January 2024",
    name: "Hui Zhuan",
    emailAddress: "huizhuansam@hotmail.com",
  };
  return (
    <Grid>
      <Grid.Col span={4}>
        <Card shadow="sm" padding="xl" withBorder>
          <Card.Section inheritPadding py="xl">
            <Stack justify="center" align="center">
              <Avatar
                size="xl"
                radius="xl"
                onMouseEnter={() => setVisible(false)}
                onMouseLeave={() => setVisible(true)}
                src={null}
              >
                {visible ? null : (
                  <Overlay
                    color="#000"
                    backgroundOpacity={0.1}
                    component={Center}
                  >
                    <ActionIcon variant="transparent" size="xl" color="gray">
                      <Pencil1Icon />
                    </ActionIcon>
                  </Overlay>
                )}
              </Avatar>
              <Title order={3}>{user.username}</Title>
              <Text size="sm">
                BetterPrepping since {user.accountCreatedAt}
              </Text>
              <Divider />
              <Menu
                shadow="md"
                width={200}
                trigger="hover"
                openDelay={100}
                closeDelay={400}
              >
                <Menu.Target>
                  <Button>Account Actions</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item color="red" leftSection={<TrashIcon />}>
                    Delete my account
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Stack>
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col span="auto">
        <Card shadow="sm" padding="lg" withBorder>
          <Card.Section inheritPadding py="xs">
            <Title>Edit Profile</Title>
          </Card.Section>
          <Divider />
          <Card.Section inheritPadding py="xs">
            <TextInput label="Name" />
            <TextInput label="Email address" />
          </Card.Section>
          <Divider />
          <Card.Section inheritPadding py="xs">
            <Group align="center" grow>
              <Button color="green">Save Changes</Button>
              <Button color="orange">Discard</Button>
            </Group>
          </Card.Section>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default ProfileEditorPage;
