import {
  Avatar,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const MyProfilePage = () => {
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
              <Avatar size="xl" radius="xl" />
              <Title order={3}>{user.username}</Title>
              <Text size="sm">
                BetterPrepping since {user.accountCreatedAt}
              </Text>
            </Stack>
          </Card.Section>
        </Card>
      </Grid.Col>
      <Grid.Col span="auto">
        <Card shadow="sm" padding="lg" withBorder>
          <Card.Section inheritPadding py="xs">
            <Title>My Public Profile</Title>
          </Card.Section>
          <Divider />
          <Card.Section inheritPadding py="xs">
            <Text>Name: {user.name}</Text>
            <Text>Email address: {user.emailAddress}</Text>
          </Card.Section>
          <Divider />
          <Card.Section inheritPadding py="xs">
            <Center>
              <Button>Edit Profile</Button>
            </Center>
          </Card.Section>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default MyProfilePage;
