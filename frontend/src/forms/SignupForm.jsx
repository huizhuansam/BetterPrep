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

const SignupForm = () => {
  const navigateTo = useNavigate();

  const { width: viewportWidth } = useViewportSize();

  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const isFormCompleted =
    !validator.isEmpty(emailAddress) &&
    !validator.isEmpty(username) &&
    !validator.isEmpty(password) &&
    !validator.isEmpty(retypedPassword);
  const isUsernameValid =
    validator.isLength(username, { min: 1 }) &&
    validator.isAlphanumeric(username);
  const isPasswordsMatch = password === retypedPassword;
  const isPasswordValid = validator.isStrongPassword(password);
  const isEmailValid = validator.isEmail(emailAddress);
  const isFormInputValid =
    isFormCompleted &&
    isPasswordsMatch &&
    isPasswordValid &&
    isEmailValid &&
    isUsernameValid;

  const handleInputEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypedPassword = (e) => {
    setRetypedPassword(e.target.value);
  };

  const handleSignUp = () => {
    if (!isFormCompleted) {
      return;
    }
    // const credentials = { emailAddress, username, password };
    navigateTo("/questions");
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={viewportWidth / 4}>
      <Card.Section inheritPadding py="xs">
        <Center>
          <Title order={2}>Sign up</Title>
        </Center>
      </Card.Section>
      <Card.Section inheritPadding>
        <Center>
          <Text size="sm" c="dimmed">
            Have an existing BetterPrep account?{" "}
            <Anchor href="/login">Log in</Anchor>
          </Text>
        </Center>
      </Card.Section>

      <Card.Section inheritPadding py="xs">
        <TextInput
          placeholder="Email address"
          variant="filled"
          onChange={handleInputEmailAddress}
        />
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
      </Card.Section>
      <Card.Section inheritPadding py="xs">
        <PasswordInput
          placeholder="Re-type password"
          variant="filled"
          onChange={handleRetypedPassword}
        />
      </Card.Section>
      <Card.Section inheritPadding py="xs">
        <Button fullWidth disabled={!isFormInputValid} onClick={handleSignUp}>
          Create account
        </Button>
      </Card.Section>
    </Card>
  );
};

export default SignupForm;
