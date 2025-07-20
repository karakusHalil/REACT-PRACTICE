import "../css/Header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(false);
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
        <img
          className="logo"
          src="./src/images/thomas-sabo-seeklogo.png"
          alt=""
        />
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

          <FaBasketShopping className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
