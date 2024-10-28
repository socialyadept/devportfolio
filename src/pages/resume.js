import React, { Component } from "react";

import SEO from "components/SEO";
import styles from "styles/Resume.module.css";
// import resume from "public/documents/kumail_resume";

class Resume extends Component {
  render() {
    return (
      <>
        <SEO title="Resume" desc="Here's my resume" url="resume" />
        <iframe
          src="documents/kumail_resume.pdf"
          className={styles["iframe-resume"]}
        ></iframe>
      </>
    );
  }
}

export default Resume;
