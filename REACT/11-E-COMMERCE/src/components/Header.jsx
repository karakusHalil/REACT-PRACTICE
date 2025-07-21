import "../css/Header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/thomas-sabo-seeklogo.png";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const { products } = useSelector((store) => store.basket);

  const calculationCount = () => {
    const totalCount =
      products &&
      products.reduce((total, product) => {
        return total + product.count;
      }, 0);

    return totalCount;
  };

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "gray";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div className="main">
      <div className="flex-row">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <p className="logo-text">Thomas Sabo Company</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Arama" />
        <div>
          {theme ? (
            <IoMdMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}

          <Badge badgeContent={calculationCount()} color="primary">
            <FaBasketShopping className="icon" style={{ marginRight: "5px" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
