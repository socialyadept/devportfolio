import React from "react";
import styles from "./SoftwareSkill.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className={styles["software-skills-main-div"]}>
          <ul className={styles["dev-icons"]}>
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className={styles["software-skill-inline"]}
                    name={logo.skillName}
                  >
                    <span
                      className={styles["iconify"]}
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    >
                      <Icon icon={logo.fontAwesomeClassname} />
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

export default SoftwareSkill;
