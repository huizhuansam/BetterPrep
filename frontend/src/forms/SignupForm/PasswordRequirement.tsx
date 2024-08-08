import { Box, rem, Text } from "@mantine/core";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

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

export default PasswordRequirement;
