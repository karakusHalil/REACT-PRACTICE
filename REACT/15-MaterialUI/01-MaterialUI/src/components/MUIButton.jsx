import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const MUIButton = () => {
  return (
    <div>
      <Stack spacing={3} direction="column" style={{ marginBottom: "50px" }}>
        <Button variant="text">KAYDOL</Button>
        <Button variant="contained">KAYDOL</Button>
        <Button variant="outlined">KAYDOL</Button>
        <Button disabled>disabled</Button>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="column">
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
      </Stack>
      <Stack spacing={3} direction="column" style={{ marginTop: "50px" }}>
        <Button startIcon={<AddCircleIcon />} variant="contained">
          Add
        </Button>
      </Stack>
    </div>
  );
};

export default MUIButton;
