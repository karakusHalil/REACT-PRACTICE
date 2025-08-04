import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const MUIGrid = () => {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6, md: 8, lg: 9 }} color={"red"}>
              ITEM
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} color={"blue"}>
              ITEM
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default MUIGrid;
