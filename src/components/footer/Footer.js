import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
// import ToggleSwitch from "../../components/footer/ToggleSwitch";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div" style={{ backgroundColor: props.theme.text }}>
      <Fade>
        <p className="footer-text" style={{ color: props.theme.highlight }}>
          Made with <span role="img">❤️</span> by <a href="https://www.linkedin.com/in/mkumail1/" target="_blank" style={{
            color: props.theme.imageHighlight, textDecoration: 'none'
          }}>Muhammad Kumail</a>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle} /> */}
      </Fade>
    </div >
  );
}
