import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Toolkit Query
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Ana Sayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/fetchcategories">
                  Fetch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/axioscategories">
                  Axios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/toolkitcategories">
                  Toolkit Query
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
