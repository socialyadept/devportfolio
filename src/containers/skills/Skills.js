import React from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./Skills.module.css";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className={styles["main"]} id="skills">
      <div className={styles["skills-header-div"]}>
        <Fade direction="up" duration={2000} distance="20px" triggerOnce>
          <h1 className={styles["skills-header"]} style={{ color: theme.text }}>
            What I Do?
          </h1>
          <p
            className={styles["skills-description"]}
            style={{ color: theme.secondaryText }}
          >
            I love to work contractually helping to growing my clients&apos;
            business
            <span role="img" aria-label="hand-shake">
              🤝
            </span>
            <br />
            My tech stack is as follows:
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
