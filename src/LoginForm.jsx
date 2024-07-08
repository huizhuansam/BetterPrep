import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

const LoginForm = () => {
  return (
    <Box>
      <Card sx={{ p: 2 }} variant="outlined">
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Log In
          </Typography>
          <TextField label="username" size="small" />
          <TextField label="password" size="small" />
          <Button variant="contained" fullWidth disableElevation disableRipple>
            Continue
          </Button>
          <Divider flexItem />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Link href="#" variant="body2" underline="none">
              forgot password
            </Link>
            <Link href="#" variant="body2" underline="none">
              sign up
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default LoginForm;
