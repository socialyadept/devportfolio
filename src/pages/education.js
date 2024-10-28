import React, { Component } from "react";
import { Zoom } from "react-awesome-reveal";

import SEO from "components/SEO";
import Educations from "containers/education/Educations";
import Certifications from "containers/certifications/Certifications";
import CompetitiveSites from "components/competitiveSites/CompetitiveSites";
import EducationImg from "atoms/EducationImg";
import styles from "styles/Education.module.css";
import { competitiveSites } from "../portfolio";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <SEO
          title="Education"
          desc="My education history has always been an entertaining one, here's what's more about it..."
          url="education"
        />
        <div className={styles["education-main"]}>
          <div className={styles["basic-education"]}>
            <Zoom duration={1000} triggerOnce>
              <div className={styles["heading-div"]}>
                <div className={styles["heading-img-div"]}>
                  <EducationImg theme={theme} />
                </div>
                <div className={styles["heading-text-div"]}>
                  <h1
                    className={styles["heading-text"]}
                    style={{ color: theme.text }}
                  >
                    Education
                  </h1>
                  <h3
                    className={styles["heading-sub-text"]}
                    style={{ color: theme.text }}
                  >
                    My Qualifications and Certifications
                  </h3>
                  <p>
                    Here&apos;s what you need to know about my qualification and
                    background{" "}
                    <span role="img" aria-label="blink">
                      😉
                    </span>
                  </p>
                  <CompetitiveSites logos={competitiveSites.competitiveSites} />
                </div>
              </div>
            </Zoom>
            <Educations theme={this.props.theme} />
            <Certifications theme={this.props.theme} />
          </div>
        </div>
      </>
    );
  }
}

export default Education;
