import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Fieldset,
  PasswordInput,
  Popover,
  Progress,
  rem,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const SignupForm = () => {
  const navigateTo = useNavigate();
  const { width: viewportWidth } = useViewportSize();

  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordPopoverOpened, setPasswordPopoverOpened] = useState(false);
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [isAgreeToTerms, setAgreeToTerms] = useState(false);

  // password validation
  const passwordRequirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  ];

  const getPasswordStrength = (password: string) => {
    let multiplier = password.length > 5 ? 0 : 1;
    passwordRequirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });
    return Math.max(
      100 - (100 / (passwordRequirements.length + 1)) * multiplier,
      10
    );
  };

  const PasswordRequirement = ({
    meets,
    label,
  }: {
    meets: boolean;
    label: string;
  }) => {
    return (
      <Text
        c={meets ? "teal" : "red"}
        style={{ display: "flex", alignItems: "center" }}
        mt={7}
        size="sm"
      >
        {meets ? (
          <CheckIcon style={{ width: rem(14), height: rem(14) }} />
        ) : (
          <Cross1Icon style={{ width: rem(14), height: rem(14) }} />
        )}{" "}
        <Box ml={10}>{label}</Box>
      </Text>
    );
  };

  const passwordChecks = passwordRequirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));
  const passwordStrength = getPasswordStrength(password);
  const passwordStrengthColor =
    passwordStrength === 100
      ? "teal"
      : passwordStrength > 50
      ? "yellow"
      : "red";

  // form validation
  const isUsernameValid =
    validator.isLength(username, { min: 1 }) &&
    validator.isAlphanumeric(username);
  const isPasswordsMatch = password === retypedPassword;
  const isPasswordValid = passwordStrength === 100;
  const isEmailValid = validator.isEmail(emailAddress);
  const isFormInputValid =
    isAgreeToTerms &&
    isPasswordsMatch &&
    isPasswordValid &&
    isEmailValid &&
    isUsernameValid;

  // form actions
  const handleSignUp = () => {
    navigateTo("/questions");
  };

  return (
    <Fieldset radius="md" w={viewportWidth / 4}>
      <Center>
        <Title order={2}>Sign up</Title>
      </Center>
      <Center>
        <Text size="sm" c="dimmed">
          Have an existing BetterPrep account?{" "}
          <Anchor href="/login">Log in</Anchor>
        </Text>
      </Center>
      <TextInput
        mt="md"
        label="Email address"
        placeholder="Email address"
        variant="filled"
        onChange={(e) => setEmailAddress(e.target.value)}
        error={!isEmailValid ? "Invalid email address" : false}
      />
      <TextInput
        mt="md"
        label="Username"
        placeholder="Username"
        variant="filled"
        onChange={(e) => setUsername(e.target.value)}
        error={!isUsernameValid ? "Username must be alphanumeric" : false}
      />
      <Popover
        opened={isPasswordPopoverOpened}
        position="bottom"
        width="target"
        transitionProps={{ transition: "pop" }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPasswordPopoverOpened(true)}
            onBlurCapture={() => setPasswordPopoverOpened(false)}
          >
            <PasswordInput
              mt="md"
              label="Password"
              placeholder="Password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress
            color={passwordStrengthColor}
            value={passwordStrength}
            size={5}
            mb="xs"
          />
          <PasswordRequirement
            label="Includes at least 6 characters"
            meets={password.length > 5}
          />
          {passwordChecks}
        </Popover.Dropdown>
      </Popover>
      <PasswordInput
        mt="md"
        label="Re-type password"
        placeholder="Re-type password"
        variant="filled"
        onChange={(e) => setRetypedPassword(e.target.value)}
      />
      <Checkbox
        checked={isAgreeToTerms}
        mt="md"
        label={
          <Text>
            {/* TODO: write terms of service */}I agree to the{" "}
            <Anchor href="/">terms of service</Anchor>
          </Text>
        }
        onChange={(event) => setAgreeToTerms(event.currentTarget.checked)}
      />
      <Button
        mt="md"
        fullWidth
        disabled={!isFormInputValid}
        onClick={handleSignUp}
      >
        Create Account
      </Button>
    </Fieldset>
  );
};

export default SignupForm;
