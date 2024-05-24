import React, { Component } from "react";

import SEO from "components/SEO";
import styles from "styles/Resume.module.css";

class Resume extends Component {
  render() {
    return (
      <>
        <SEO title="Resume" descrip="Here's my resume" url="resume" />
        <div className={styles["div-resume"]}>
          <embed
            src={`documents/kumail.pdf`}
            type="application/pdf"
            className={styles["embed-resume"]}
          />
        </div>
      </>
    );
  }
}

export default Resume;
