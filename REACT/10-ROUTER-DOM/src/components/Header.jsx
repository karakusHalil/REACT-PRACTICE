import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        Anasayfa
      </Link>
      <Link className="link" to="/about">
        Hakkımızda
      </Link>
      <Link className="link" to="/product">
        Ürünler
      </Link>
      <Link className="link" to="/contact">
        İletişim
      </Link>
    </div>
  );
};

export default Header;
