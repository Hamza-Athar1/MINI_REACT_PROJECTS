import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Style/home.css";
import "./Style/animations.css";
import pic from "../assets/react.svg";
import fb from "../assets/fblogo.png";
import insta from "../assets/instalogo.png";
import git from "../assets/gitlogo.png";
import link from "../assets/linkedin.png";
import { useState } from "react";

import { Outlet, Link, useLocation } from "react-router-dom";

function Home() {
  const [Selected, setSelected] = useState("");
  const location = useLocation();
  const items = [
    "BMI",
    "Counter",
    "Form Validation",
    "Pokedex",
    "Random Joke",
    "Tic Tac Toe",
    "Stopwatch",
    "Weather",
    "Github Users",
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={pic}
              width="30"
              height="30"
              className="d-inline-block align-top"
              id="logo"
              alt="React Logo"
              onClick={() => {
                setSelected("");
              }}
            />
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
            <ul className="navbar-nav nav-pills ml-auto w-100 justify-content-between">
              {items.map((item, index) => (
                <li
                  className={
                    Selected === item
                      ? "nav-item active d-flex align-items-center"
                      : "nav-item d-flex align-items-center"
                  }
                  key={index}
                >
                  <Link
                    className="nav-link"
                    to={`/${item.replace(/\s+/g, "")}`}
                    onClick={() => {
                      setSelected(item);
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <span className="navbar-text">
                <a
                  href="https://www.facebook.com/hamza.athar.1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={fb}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    id="credit"
                    alt="Facebook Logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/_hamza_nvm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={insta}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    id="credit"
                    alt="Instagram Logo"
                  />
                </a>
                <a
                  href="https://github.com/Ezi0567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={git}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    id="credit"
                    alt="GitHub Logo"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-athar-ezio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={link}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    id="credit"
                    alt="LinkedIn Logo"
                  />
                </a>
              </span>
            </ul>
          </div>
        </div>
      </nav>

      {location.pathname === "/" && (
        <div className={`fade-in`} style={{ paddingTop: "80px" }}>
          <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
              <h1 className="display-4">React Mini Projects</h1>
              <p
                className="lead"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Welcome to my React Mini Projects. Select one of the options in
                the navbar to check that project.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}></div>
        </div>
      )}

      <div style={{ paddingTop: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
