import { Link, NavLink } from "react-router";

export default function Navbar() {

  const closeMenu = () => {
    const toggler = document.querySelector(".navbar-toggler");
    if (toggler?.getAttribute("aria-expanded") === "true") {
      if (toggler instanceof HTMLElement) {
        toggler.click();
      }
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#282C33" }}
    >
      <div className="container-fluid">

        <Link
          onClick={closeMenu}
          className="navbar-brand" style={{fontSize : "16px"}}
          to="/"
        ><span className="has">{"<!>"}</span><strong>I Build, Therefore I Am</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><i className="fa-solid fa-sliders fa-flip-horizontal"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="nav-link mx-3"
              >
                <span className="has">#</span> Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                onClick={closeMenu}
                className="nav-link mx-3"
              >
                <span className="has">#</span> Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className="nav-link mx-3"
              >
                <span className="has">#</span> About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="nav-link mx-3"
              >
                <span className="has">#</span> Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}