import { Anchor, Center, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const { height: viewportHeight } = useViewportSize();
  const navigate = useNavigate();
  return (
    <Center h={viewportHeight}>
      <Stack justify="center" align="center">
        <Title>404 Not Found</Title>
        <Text>
          We could not find what you were looking for.{" "}
          {<Anchor onClick={() => navigate("/")}>Go home</Anchor>}
        </Text>
      </Stack>
    </Center>
  );
};

export default NotFoundPage;
