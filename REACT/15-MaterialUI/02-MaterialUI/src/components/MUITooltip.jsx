import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const MUITooltip = () => {
  return (
    <>
      <div style={{ marginTop: "200px", marginLeft: "200px" }}>
        <Tooltip title="delete" placement="top-start">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default MUITooltip;
