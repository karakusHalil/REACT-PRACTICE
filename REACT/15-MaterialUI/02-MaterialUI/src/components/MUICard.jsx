import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HondaCivic from "../images/HondaCivic.jpg";

const MUICard = () => {
  return (
    <Card
      sx={{
        width: "350px",
        height: "480px",
        boxShadow: "2px 4px 6px rgba(0,0,0,0.5)",
      }}
    >
      <CardMedia sx={{ height: 200 }} image={HondaCivic} title="car" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Honda Civic
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          aut eum optio, culpa impedit consequuntur harum exercitationem
          obcaecati sequi, porro aliquam reprehenderit quam vero illum earum
          veritatis. Optio sapiente tempore, maxime nobis inventore est aliquam
          laborum, laboriosam maiores molestias totam!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Satın Al</Button>
        <Button size="small">İletişime Geç</Button>
      </CardActions>
    </Card>
  );
};

export default MUICard;
