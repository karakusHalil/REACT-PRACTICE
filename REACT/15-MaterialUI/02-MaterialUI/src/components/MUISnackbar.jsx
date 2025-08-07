import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
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
          message="Hata oluştu !"
          action={action}
          autoHideDuration={3000}
          onClose={handleClose}
        />
      </div>
    </>
  );
};

export default MUISnackbar;
