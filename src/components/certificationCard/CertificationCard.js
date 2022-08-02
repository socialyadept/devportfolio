import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./CertificationCard.module.css";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade direction="up" duration={2000} distance="20px" triggerOnce>
        <div className={styles["cert-card"]}>
          <div className={styles["content"]}>
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles["content-overlay"]}></div>
              <div
                className={styles["cert-header"]}
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className={styles["logo_img"]}
                  src={`/images/${certificate.logo_path}`}
                  alt={certificate.alt_name}
                />
              </div>
              <div className={styles["content-details fadeIn-top"]}>
                <h3
                  className={styles["content-title"]}
                  style={{ color: theme.body }}
                >
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className={styles["cert-body"]}>
            <h2
              className={styles["cert-body-title"]}
              style={{ color: theme.text }}
            >
              {certificate.title}
            </h2>
            <h3
              className={styles["cert-body-subtitle"]}
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
