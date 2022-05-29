import React from "react";
import styles from "./Skills.module.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className={styles["main"]} id="skills">
      <div className={styles["skills-header-div"]}>
        <Fade bottom duration={2000} distance="20px">
          <h1 className={styles["skills-header"]} style={{ color: theme.text }}>
            What I Do?
          </h1>
          <p
            className={styles["skills-description"]}
            style={{ color: theme.secondaryText }}
          >
            I love to freelance and to help in growing my clients' business{" "}
            <span role="img" aria-label="hand-shake">
              🤝
            </span>
            <br />
            My development stack is as follows:
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
