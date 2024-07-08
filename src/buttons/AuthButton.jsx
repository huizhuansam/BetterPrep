import { Button } from "@mui/material";

const AuthButton = ({ displayText, disabled, onClick }) => {
  return (
    <Button
      fullWidth
      disableElevation
      disableRipple
      variant="contained"
      disabled={disabled}
      onClick={onClick}
    >
      {displayText}
    </Button>
  );
};

export default AuthButton;
