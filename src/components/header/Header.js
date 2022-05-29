import React, { Component } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { greeting } from "../../portfolio.js";

const navLinks = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/education",
    name: "Education",
  },
  {
    url: "/experience",
    name: "Experience",
  },
  {
    url: "/projects",
    name: "Projects",
  },
  {
    url: "/blogs",
    name: "Blogs",
  },
  {
    url: "/contact",
    name: "Contact Me",
  },
];

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <header className={styles.header}>
          <Link href="/">
            <a className={styles.logo}>
              <span style={{ color: theme.text }}> &lt;</span>
              <span
                className={styles["logo-name"]}
                style={{ color: "#010101" }}
              >
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </a>
          </Link>
          <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
          <label className={styles["menu-icon"]} htmlFor="menu-btn">
            <span className={styles.navicon}></span>
          </label>
          <ul className={styles.menu} style={{ backgroundColor: theme.body }}>
            {navLinks.map((link, index) => (
              <li key={`${link.name}_${index}`}>
                <Link
                  href={link.url}
                  // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  // onMouseOut={(event) => onMouseOut(event)}
                >
                  <a
                    activestyle={{ fontWeight: "bold" }}
                    style={{ color: theme.text }}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;
