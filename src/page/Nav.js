import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Nav = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", handleColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link className="portpolio" to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "navMenu" : "navMenu open"}>
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/experiences">
            <h1>Experiences</h1>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <h1>Projects</h1>
          </Link>
        </li>
      </ul>
      <div className="menuIcon" onClick={handleClick}>
        {click ? (
          <ListIcon fontSize={"large"} style={{ color: "white" }} />
        ) : (
          <CloseIcon fontSize={"large"} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
