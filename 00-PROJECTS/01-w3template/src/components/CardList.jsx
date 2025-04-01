import { useContext } from "react";
import { CardContext } from "../context/CardContext";

function CardList() {
  const { cardInfo } = useContext(CardContext);
  return (
    <>
      <div className="w3-row-padding w3-center w3-margin-top">
        {cardInfo.map((info, index) => (
          <div key={index} className="w3-third">
            <div
              className="w3-card w3-container"
              style={{ minHeight: "460px" }}
            >
              <h3>{info.title}</h3>
              <br />
              <i
                className={`${info.icon} w3-margin-bottom w3-text-theme`}
                style={{ fontSize: "120px" }}
              ></i>
              {info.features.map((feature, i) => (
                <p key={i}>{feature}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardList;
