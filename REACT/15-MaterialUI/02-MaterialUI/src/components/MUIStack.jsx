import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const MUIStack = () => {
  return (
    <>
      <div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          divider={<Divider orientation="horizantal" flexItem />}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Stack>
      </div>
    </>
  );
};

export default MUIStack;
