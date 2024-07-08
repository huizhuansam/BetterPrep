import { Button } from "@mui/material";

const BaseButton = ({ displayText, disabled, onClick }) => {
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

export default BaseButton;
