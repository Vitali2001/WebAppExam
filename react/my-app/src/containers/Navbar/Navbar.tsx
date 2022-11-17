import * as React from "react";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/students">
          Students
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                  <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/add_student"
                >
                  Add student
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};
export default Navbar;