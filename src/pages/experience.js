import React, { Component } from "react";

import ExperienceAccordion from "containers/experienceAccordion/ExperienceAccordion.js";
import styles from "styles/Experience.module.css";
import { experience } from "portfolio.js";
import { Zoom } from "react-awesome-reveal";
import ExperienceImg from "atoms/ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["experience-main"]}>
        {/* <Helmet>
          <title>Experience | TheRealMVP</title>
          <meta
            name="description"
            content="Kumail has worked with many evolving startups as a Full Stack Developer, Designer and a Software Architect. Kumail have also worked with some well established companies as Software Quality Assurance Trainee."
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Experience | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/experience"
          />
          <meta
            name="twitter:description"
            content="Kumail has worked with many evolving startups as a Full Stack Developer, Designer and a Software Architect. Kumail have also worked with some well established companies as Software Quality Assurance Trainee..."
          />{" "}
          <meta property="og:title" content="Experience | TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="Kumail has worked with many evolving startups as a Full Stack Developer, Designer and a Software Architect. Kumail have also worked with some well established companies as Software Quality Assurance Trainee..."
          />
          <meta
            property="og:url"
            content="https://muhammadkumail.com/experience"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet> */}
        <div className={styles["basic-experience"]}>
          <Zoom duration={1000}>
            <div className={styles["experience-heading-div"]}>
              <div className={styles["experience-heading-img-div"]}>
                <ExperienceImg theme={theme} />
              </div>
              <div className={styles["experience-heading-text-div"]}>
                <h1
                  className={styles["experience-heading-text"]}
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className={styles["experience-heading-sub-text"]}
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className={styles["experience-header-detail-text"]}
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      </div>
    );
  }
}

export default Experience;
