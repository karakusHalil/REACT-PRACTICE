import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

const MUIProgress = () => {
  const [progess, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const plusValue = Math.floor(Math.random() * 10);
        return Math.min(oldProgress + plusValue, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div>
        {/* <CircularProgress />
        <CircularProgress color="success" />
        <LinearProgress /> */}
        <br />
        {/* <LinearProgress color="secondary" /> */}
        <LinearProgress variant="determinate" value={progess} />
      </div>
    </>
  );
};

export default MUIProgress;
