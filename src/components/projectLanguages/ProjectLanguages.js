import { Icon } from "@iconify/react";
import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import styles from "./ProjectLanguages.module.css";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className={styles["software-skills-main-div"]}>
          <ul className={styles["dev-icons-languages"]}>
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className={styles["software-skill-inline-languages"]}
                    name={logo.skillName}
                  >
                    <span
                      className={styles["iconify"]}
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    >
                      <Icon icon={logo.iconifyClass} />
                    </span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
