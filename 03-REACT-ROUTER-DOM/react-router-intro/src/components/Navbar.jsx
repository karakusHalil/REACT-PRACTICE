import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ handleLogout, user }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React-Dom
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Ana Sayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Ürünler
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Hakkımızda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  İletişim
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productlist">
                  Ürün Listesi
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/favorites">
                      Favoriler
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleLogout}>
                      Logout ({user.firstname} {user.lastname})
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  handleLogout: PropTypes.func,
  user: PropTypes.object,
};
