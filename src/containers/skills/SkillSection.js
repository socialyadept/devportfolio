import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./Skills.module.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";

import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, index) => {
          return (
            <div className={styles["skills-main-div"]} key={index}>
              <Fade duration={1000} triggerOnce>
                <div className={styles["skills-image-div"]}>
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className={styles["skills-text-div"]}>
                <Fade duration={1000} direction="down" triggerOnce>
                  <h1
                    className={styles["skills-heading"]}
                    style={{ color: theme.text }}
                  >
                    {skill.title}
                  </h1>
                </Fade>
                <Fade duration={1500} triggerOnce>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade duration={1800} direction="up" triggerOnce>
                  <div>
                    {skill.skills.map((skillSentence, key) => {
                      return (
                        <p
                          className={styles["subTitle skills-text"]}
                          style={{ color: theme.secondaryText }}
                          key={key}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
