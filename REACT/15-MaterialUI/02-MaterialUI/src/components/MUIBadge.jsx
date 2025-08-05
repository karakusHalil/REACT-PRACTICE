import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const MUIBadge = () => {
  return (
    <>
      <div style={{ marginTop: "100px", marginLeft: "100px" }}>
        <Badge
          badgeContent={115}
          color="primary"
          max={99}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MailIcon sx={{ width: "30px", height: "30px" }} color="action" />
        </Badge>
      </div>
    </>
  );
};

export default MUIBadge;
