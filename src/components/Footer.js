import "../css/footer.css";
import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h2 className="footerText">Connect With Us</h2>
        <div className="socialLinks">
          <a
            href="https://example.com/facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-facebook fa-beat-fade fa-2xl"
              style={{ color: "#3b5998" }}
            ></i>
          </a>
          <a
            href="https://example.com/twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-twitter fa-beat-fade fa-2xl"
              style={{ color: "#17adee" }}
            ></i>
          </a>
          <a
            href="https://example.com/instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-instagram fa-beat-fade fa-2xl"
              style={{ color: "#d62976" }}
            ></i>
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} PSB INDUSTRIES. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
