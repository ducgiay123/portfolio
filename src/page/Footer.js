import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainter">
        <div className="footerLeft">
          <div className="github">
            <GitHubIcon style={{ color: "white" }} fontSize="medium" />
            <p>https://github.com/ducgiay123</p>
          </div>
          <div className="phone">
            <LocalPhoneIcon style={{ color: "white" }} fontSize="medium" />
            <p>0449347664</p>
          </div>
          <div className="gmail">
            <EmailIcon fontSize="medium" style={{ color: "white" }} />
            <p>ductrung190499@gmail.com</p>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerRightDiv">
            <p align="right">
              Coppyright © 12/18/2022 Duc Trung Works, Inc - All Rights Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
