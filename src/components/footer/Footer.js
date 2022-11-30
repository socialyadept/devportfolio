import React from "react";
import styles from "./Footer.module.css";
// import ToggleSwitch from "../../components/footer/ToggleSwitch";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className={styles["footer-div"]}>
      <p className={styles["footer-text"]} style={{ color: props.theme.text }}>
        Made with <span role="img">❤️</span> by
        <a
          href="https://www.linkedin.com/in/mkumail1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: props.theme.imageHighlight,
            textDecoration: "none",
          }}
        >
          {" "}
          Muhammad Kumail
        </a>
      </p>
      {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle} /> */}
    </div>
  );
}
