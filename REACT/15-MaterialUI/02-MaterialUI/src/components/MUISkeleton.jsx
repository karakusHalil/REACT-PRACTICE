import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import Honda from "../images/HondaCivic.jpg";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MUISkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Card sx={{ maxWidth: 250, m: 2 }}>
        {loading ? (
          <Skeleton
            variant="rounded"
            width={250}
            height={150}
            animation="wave"
          />
        ) : (
          <CardMedia component="img" height="150" image={Honda} alt="Car" />
        )}
        <CardContent>
          {loading ? (
            <Skeleton variant="rounded" animation="wave" />
          ) : (
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              {"Honda Civic 1.500.000 TL "}
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default MUISkeleton;
