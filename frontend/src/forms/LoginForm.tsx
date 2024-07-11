import {
  Anchor,
  Button,
  Card,
  Center,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const { width: viewportWidth } = useViewportSize();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormCompleted =
    !validator.isEmpty(username) && !validator.isEmpty(password);

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = () => {
    navigateTo("/questions");
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={viewportWidth / 4}>
      <Card.Section inheritPadding py="xs">
        <Center>
          <Title order={2}>Log in</Title>
        </Center>
      </Card.Section>
      <Card.Section inheritPadding>
        <Center>
          <Text size="sm" c="dimmed">
            New to BetterPrep? <Anchor href="/signup">Sign up instead</Anchor>
          </Text>
        </Center>
      </Card.Section>

      <Card.Section inheritPadding py="xs">
        <TextInput
          placeholder="Username"
          variant="filled"
          onChange={handleInputUsername}
        />
      </Card.Section>
      <Card.Section inheritPadding py="xs">
        <PasswordInput
          placeholder="Password"
          variant="filled"
          onChange={handleInputPassword}
        />
        <Anchor size="sm">Forgot password?</Anchor>
      </Card.Section>
      <Card.Section inheritPadding py="xs">
        <Button fullWidth disabled={!isFormCompleted} onClick={handleLogin}>
          Continue
        </Button>
      </Card.Section>
    </Card>
  );
};

export default LoginForm;
