import { Button, Card, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <Card sx={{ padding: 2 }} variant="outlined">
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
          <Link
            // modifies MUI Link to use react-router Link API
            component={RouterLink}
            to="/signup"
            variant="body2"
            underline="none"
          >
            sign up
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};

export default LoginForm;
