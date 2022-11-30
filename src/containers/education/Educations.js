import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./Educations.module.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["main"]} id="educations">
        <div className={styles["educations-header-div"]}>
          <Fade bottom duration={2000} distance="20px" triggerOnce>
            <h1
              className={styles["educations-header"]}
              style={{ color: theme.text }}
            >
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className={styles["educations-body-div"]}>
          {degrees.degrees.map((degree, index) => {
            return <DegreeCard degree={degree} key={index} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
