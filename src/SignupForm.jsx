import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";

const SignupForm = () => {
  return (
    <Box>
      <Card sx={{ p: 2 }} variant="outlined">
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Sign Up
          </Typography>
          <TextField label="email address" size="small" />
          <TextField label="username" size="small" />
          <TextField label="password" size="small" />
          <TextField label="re-type password" size="small" />
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
              to="/login"
              variant="body2"
              underline="none"
            >
              log in
            </Link>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default SignupForm;
