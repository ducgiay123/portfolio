import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import frontImage from "../assert/background.png";
import "./frontImage.css";

const FrontImage = () => {
  return (
    <div className="frontImage">
      <div className="mask">
        <img className="into-img" src={frontImage} alt="IntoImg" />
      </div>
      <div className="content">
        <p>Hello, I am Duc Trung!</p>
        <h1>Embedded System Developer</h1>

        <Button
          className="transparentButton"
          variant="contained"
          color="secondary"
        >
          <Link to="/projects">View my work</Link>
        </Button>
      </div>
    </div>
  );
};

export default FrontImage;
