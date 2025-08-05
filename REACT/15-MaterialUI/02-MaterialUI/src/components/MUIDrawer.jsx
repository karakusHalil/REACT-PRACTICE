import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const MUIDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setIsOpen(true)}>Aç</Button>

        <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
          <Box sx={{ width: "400px" }}>
            <p>Lorem ipsum dolor sit amet.</p>
          </Box>
          <Divider />
        </Drawer>
      </div>
    </>
  );
};

export default MUIDrawer;
