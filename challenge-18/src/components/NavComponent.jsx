import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavComponent.css";
import logo from "../assets/react.svg";
import { useAuth } from "../context/authContext";

const NavComponent = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      {!state.isAuthenticated ? (
        <>
          <nav className="nav-bar">
            <Link to="/" className="nav-logo">
              <img src={logo} alt="logo" className="logo" />
              <p className="textLogo">React JS</p>
            </Link>
            <div className="nav-links">
              <Link
                to="/"
                className="nav-link"
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="nav-link"
              >
                Acerca de
              </Link>
              <Link
                to="/login"
                className="nav-link"
              >
                Inicio de sesión
              </Link>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav-bar">
            <Link to="/" className="nav-logo">
              <img src={logo} alt="logo" className="logo" />
              <p className="textLogo">React JS</p>
            </Link>
            <div className="nav-links">
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="nav-link"
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                className="nav-link"
              >
                About
              </Link>
              {state.isAuthenticated && (
                <>
                  <button
                    onClick={handleLogout}
                    className="nav-link2 logout-button"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavComponent;