import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardContext = createContext();

function CardContextProvider({ children }) {
  const infos = [
    {
      title: "Responsive",
      icon: "fa fa-desktop",
      features: [
        "Built-in responsiveness",
        "Mobile first fluid grid",
        "Fits any screen sizes",
        "PC Tablet and Mobile",
      ],
    },
    {
      title: "Standard CSS",
      icon: "fa fa-css3",
      features: [
        "Standard CSS only",
        "Easy to learn",
        "No need for jQuery",
        "No JavaScript library",
      ],
    },
    {
      title: "Design",
      icon: "fa fa-diamond",
      features: [
        "Paper like design",
        "Bold colors and shadows",
        "Equal across platforms",
        "Equal across devices",
      ],
    },
  ];

  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setCardInfo(infos);
  }, []);

  const infoValue = {
    infos,
    cardInfo,
    setCardInfo,
  };

  return (
    <>
      <CardContext.Provider value={infoValue}>{children}</CardContext.Provider>
    </>
  );
}

export { CardContext, CardContextProvider };

CardContextProvider.propType = {
  children: PropTypes.element,
};
