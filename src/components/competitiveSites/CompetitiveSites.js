import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import styles from "./CompetitiveSites.module.css";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className={styles["competitive-sites-main-div"]}>
        <ul className={styles["dev-icons"]}>
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li
                  className={styles["competitive-sites-inline"]}
                  name={logo.siteName}
                >
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={styles["iconify"]}
                      data-icon={logo.iconifyClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
