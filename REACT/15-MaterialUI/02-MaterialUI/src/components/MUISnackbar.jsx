import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

import { useState } from "react";

const MUISnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <>
      <Button size="small" color="info" onClick={handleClose}>
        KAPAT
      </Button>
      <IconButton
        onClick={handleClose}
        sx={{ color: "white" }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <>
      <div>
        <Button onClick={handleSnackbar}>Snackbar'ı Aç</Button>
        <Snackbar
          open={openSnackbar}
          action={action}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            severity="success"
            onClose={handleClose}
            variant="filled"
            sx={{ width: "100%" }}
          >
            Başarılı
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default MUISnackbar;
