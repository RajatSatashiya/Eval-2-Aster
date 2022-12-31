import React from "react";
import { useRef, useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "../Stylings/Navbar.css";

function Navbar() {
  const history = useNavigate();
  const authContext = useContext(AuthContext);
  return (
    <>
      <nav className="nav2">
        <div className="nav-portion">
          <Link to="/">
            <h3 className="project-title">HomePage</h3>
          </Link>
          <ul className="nav-list">
            <li>
              <Link to="/login" className="llblink">
                Login
              </Link>
            </li>

            <li>User Logged in: {authContext.isAuth ? "Yes" : "No"}</li>
            <li>
              <button
                disabled={!authContext.isAuth}
                onClick={() => {
                  authContext.logout();
                  history("/login");
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
