import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const MUISelect = () => {
  const [currencies, setCurrencies] = useState([]);
  console.log(currencies);
  return (
    <>
      {/* <div>
        <FormControl sx={{ width: "150px" }}>
          <InputLabel>Para Birimi</InputLabel>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value="TRY">Türk Lirası</MenuItem>
            <MenuItem value="USD">Dolar</MenuItem>
            <MenuItem value="EUR">EURO</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <div>
        <TextField
          sx={{ width: "200px", marginTop: "20px" }}
          label="Para Birimi"
          select
          SelectProps={{ multiple: true }}
          value={currencies}
          onChange={(e) => setCurrencies(e.target.value)}
        >
          <MenuItem value="TRY">Türk Lirası</MenuItem>
          <MenuItem value="USD">Dolar</MenuItem>
          <MenuItem value="EUR">EURO</MenuItem>
        </TextField>
      </div>
    </>
  );
};

export default MUISelect;
