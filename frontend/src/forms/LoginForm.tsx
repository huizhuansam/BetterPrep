import {
  Anchor,
  AspectRatio,
  Box,
  Button,
  Center,
  Fieldset,
  Loader,
  LoadingOverlay,
  Overlay,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import login from "../api/login";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const { width: viewportWidth } = useViewportSize();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingOverlayVisible, setIsLoadingOverlayVisible] = useState(false);
  const [isUserSubmitWrongCredentials, setIsUserSubmitWrongCredentials] =
    useState(false);

  const isFormCompleted =
    !validator.isEmpty(username) && !validator.isEmpty(password);

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = async () => {
    setIsLoadingOverlayVisible(true);
    const loginApiCall = await login(username, password);
    setIsLoadingOverlayVisible(false);
    if (!loginApiCall.ok) {
      setIsUserSubmitWrongCredentials(true);
      return;
    }
    navigateTo("/questions");
  };

  return (
    <Fieldset radius="md" w={viewportWidth / 4} pos="relative">
      <LoadingOverlay visible={isLoadingOverlayVisible} />
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
        error={isUserSubmitWrongCredentials && "Incorrect credentials provided"}
      />
      <PasswordInput
        mt="md"
        label="Password"
        placeholder="Password"
        variant="filled"
        onChange={handleInputPassword}
        error={isUserSubmitWrongCredentials && "Incorrect credentials provided"}
      />
      <Anchor size="sm">Forgot password?</Anchor>
      <Button
        mt="md"
        fullWidth
        disabled={!isFormCompleted || isLoadingOverlayVisible}
        onClick={handleLogin}
      >
        Continue
      </Button>
    </Fieldset>
  );
};

export default LoginForm;
