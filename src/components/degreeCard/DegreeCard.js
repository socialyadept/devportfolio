import React, { Component } from "react";
import { Flip } from "react-awesome-reveal";

import styles from "./DegreeCard.module.css";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className={styles["degree-card"]}>
        <Flip duration={2000} direction="horizontal" triggerOnce>
          <div className={styles["card-img"]}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(50%, 50%)",
              }}
              src={`/images/${degree.logo_path}`}
              layout="fill"
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <div className={styles["card-body"]}>
          <div
            className={styles["body-header"]}
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className={styles["body-header-title"]}>
              <h2
                className={styles["card-title"]}
                style={{ color: theme.text }}
              >
                {degree.title}
              </h2>
              <h3
                className={styles["card-subtitle"]}
                style={{ color: theme.text }}
              >
                {degree.subtitle}
              </h3>
            </div>
            <div className={styles["body-header-duration"]}>
              <h3 className={styles["duration"]} style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className={styles["body-content"]}>
            {degree.descriptions.map((sentence, index) => {
              return (
                <p
                  key={index}
                  className={styles["content-list"]}
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles["visit-btn"]}
                style={{ backgroundColor: theme.headerColor }}
              >
                <p className={styles["btn"]} style={{ color: theme.text }}>
                  Visit Website
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DegreeCard;
