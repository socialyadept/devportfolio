import React, { Component } from "react";

import styles from "../styles/Education.module.css";
import Educations from "../containers/education/Educations";
import Certifications from "../containers/certifications/Certifications";
import CompetitiveSites from "../components/competitiveSites/CompetitiveSites";
import EducationImg from "../atoms/EducationImg";
import { competitiveSites } from "../portfolio";
import { Zoom } from "react-awesome-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["education-main"]}>
        {/* <Helmet>
          <title>Education | TheRealMVP</title>‍
          <meta
            name="description"
            content="My education history has always been an entertaining one, here's what's more about it..."
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Education | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/education"
          />
          <meta
            name="twitter:description"
            content="My education history has always been an entertaining one, here's what's more about it..."
          />
          <meta property="og:title" content="Education | TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="My education history has always been an entertaining one, here's what's more about it..."
          />
          <meta
            property="og:url"
            content="https://muhammadkumail.com/education"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet> */}
        <div className={styles["basic-education"]}>
          <Zoom duration={1000}>
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
                  Here's what you need to know about my qualification background{" "}
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
    );
  }
}

export default Education;
