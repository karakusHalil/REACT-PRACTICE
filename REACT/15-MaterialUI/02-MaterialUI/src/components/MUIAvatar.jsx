import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const MUIAvatar = () => {
  return (
    <>
      <Stack spacing={2}>
        <Avatar
          src="https://randomuser.me/api/portraits/women/60.jpg"
          sx={{ width: 50, height: 50 }}
        />
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: "red" }}>K</Avatar>
      </Stack>
    </>
  );
};

export default MUIAvatar;
