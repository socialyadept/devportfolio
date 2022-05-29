import React, { Component } from "react";

import styles from "./Certifications.module.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className={styles["certs-header-div"]}>
          {/* <Fade bottom duration={2000} distance="20px"> */}
          <h1 className={styles["certs-header"]} style={{ color: theme.text }}>
            Certifications
          </h1>
          {/* </Fade> */}
        </div>
        <div className={styles["certs-body-div"]}>
          {certifications.certifications.map((cert, index) => {
            return (
              <CertificationCard key={index} certificate={cert} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
