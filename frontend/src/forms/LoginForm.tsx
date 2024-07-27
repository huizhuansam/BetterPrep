import {
  Anchor,
  Button,
  Center,
  Fieldset,
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
    <Fieldset radius="md" w={viewportWidth / 4}>
      <Center>
        <Title order={2}>Log in</Title>
      </Center>
      <Center>
        <Text size="sm" c="dimmed">
          New to BetterPrep? <Anchor href="/signup">Sign up instead</Anchor>
        </Text>
      </Center>
      <TextInput
        mt="md"
        label="Username"
        placeholder="Username"
        variant="filled"
        onChange={handleInputUsername}
      />
      <PasswordInput
        mt="md"
        label="Password"
        placeholder="Password"
        variant="filled"
        onChange={handleInputPassword}
      />
      <Anchor size="sm">Forgot password?</Anchor>
      <Button
        mt="md"
        fullWidth
        disabled={!isFormCompleted}
        onClick={handleLogin}
      >
        Continue
      </Button>
    </Fieldset>
  );
};

export default LoginForm;
