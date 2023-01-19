import { Alert, Snackbar } from "@mui/material";
import { AlertColor } from "@mui/material/Alert/Alert";
import { useState } from "react";

const SnackbarNotification = () => {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    autoHideDuration: 2000,
    message: "",
    severity: "success",
    vertical: "top",
    horizontal: "center",
  });
  //TODO: Fetch the state from state manager.
  return (
    <Snackbar
      autoHideDuration={snackbarState.autoHideDuration ?? 2000}
      onClose={() => setSnackbarState({ ...snackbarState, open: false })}
      open={snackbarState.open}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      key={snackbarState.vertical + snackbarState.horizontal}
      transitionDuration={1000}
    >
      <Alert
        severity={snackbarState.severity as AlertColor}
        sx={{ width: "100%" }}
      >
        {snackbarState.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
