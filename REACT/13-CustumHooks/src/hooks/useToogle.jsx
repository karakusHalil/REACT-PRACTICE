import { useState } from "react";

const useToogle = () => {
  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen(!open);
  };
  return {
    open,
    change,
  };
};

export default useToogle;
