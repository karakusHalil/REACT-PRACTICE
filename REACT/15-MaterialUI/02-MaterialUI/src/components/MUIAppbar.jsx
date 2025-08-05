import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MUIAppbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openControl = anchorEl ? true : false;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography variant="h5">MUI</Typography>
        <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <Button sx={{ color: "#fff" }}>Ana Sayfa</Button>
          <Button sx={{ color: "#fff" }} onClick={openMenu}>
            Ürünler
          </Button>
          <Button sx={{ color: "#fff" }}>Hakkımızda</Button>
          <Button sx={{ color: "#fff" }}>İletişim</Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
          <MenuItem>Lastik</MenuItem>
          <MenuItem>Bijon</MenuItem>
          <MenuItem>Ayna</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MUIAppbar;
