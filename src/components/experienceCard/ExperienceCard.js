import React, { Component } from "react";

import styles from "./ExperienceCard.module.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className={styles["experience-card"]}
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className={styles["experience-card-logo-div"]}>
          <img
            className={styles["experience-card-logo"]}
            src={`/images/${experience["logo_path"]}`}
            alt=""
          />
        </div>
        <div className={styles["experience-card-body-div"]}>
          <div className={styles["experience-card-header-div"]}>
            <div className={styles["experience-card-heading-left"]}>
              <h3
                className={styles["experience-card-title"]}
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className={styles["experience-card-company"]}
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className={styles["experience-card-heading-right"]}>
              <p
                className={styles["experience-card-duration"]}
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className={styles["experience-card-location"]}
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className={styles["experience-card-description"]}
            style={{ color: theme.text }}
          >
            {experience["description"]}
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
