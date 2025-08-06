import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const MUIDialog = () => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Button
          sx={{ marginTop: "350px", marginLeft: "750px" }}
          variant="outlined"
          color="error"
          onClick={handleClickOpen}
        >
          Dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Soru</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Sözleşmeyi kabul ediyor musunuz ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hayır</Button>
            <Button onClick={handleClose} autoFocus>
              Evet
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default MUIDialog;
