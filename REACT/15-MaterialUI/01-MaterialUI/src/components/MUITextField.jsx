import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MUITextField = () => {
  return (
    <>
      <div>
        <div>
          <TextField label="isim" variant="outlined" />
          <TextField label="isim" variant="filled" />
          <TextField label="isim" variant="standard" />
        </div>
        <div>
          <TextField label="isim" variant="outlined" color="error" />
          <TextField label="isim" variant="filled" color="success" />
          <TextField label="isim" variant="standard" color="info" />
        </div>
        <div>
          <TextField
            label="isim"
            variant="outlined"
            color="warning"
            helperText="İsminizi giriniz"
          />
        </div>
        <div>
          <TextField
            InputProps={{ readOnly: true }}
            label="Kimlik No"
            variant="outlined"
            color="warning"
          />
        </div>
        <div>
          <TextField
            InputProps={{
              endAdornment: <InputAdornment position="end">KG</InputAdornment>,
            }}
            variant="outlined"
          />
          <TextField
            label="Isminizi giriniz"
            helperText="İsminizi giriniz"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="İsimi giriniz"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            size="large"
          />
        </div>
      </div>
    </>
  );
};

export default MUITextField;
