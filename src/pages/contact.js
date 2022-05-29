import React, { Component } from "react";

import SocialMedia from "components/socialMedia/SocialMedia";
import Button from "components/button/Button";
import AddressImg from "atoms/AddressImg";
import { Zoom } from "react-awesome-reveal";
import styles from "styles/Contact.module.css";
import { contactPageData, socialMediaLinks } from "../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["contact-main"]}>
        {/* <Helmet>
          ‍<title>Contact | TheRealMVP</title>‍
          <meta
            name="description"
            content="Contact Muhammad Kumail aka TheRealMVP today"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Contact | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/contact"
          />
          <meta
            name="twitter:description"
            content="Contact Muhammad Kumail aka TheRealMVP today"
          />{" "}
          <meta property="og:title" content="Contact | TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="Contact Muhammad Kumail aka TheRealMVP today"
          />
          <meta
            property="og:url"
            content="https://muhammadkumail.com/contact"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet> */}
        <div className={styles["basic-contact"]}>
          <Zoom duration={1000}>
            <div className={styles["contact-heading-div"]}>
              <div className={styles["contact-heading-img-div"]}>
                <AddressImg theme={theme} />
              </div>
              <div className={styles["contact-heading-text-div"]}>
                <h1
                  className={styles["contact-heading-text"]}
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className={styles["contact-header-detail-text"]}
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia
                  theme={theme}
                  socialMediaLinks={socialMediaLinks}
                />
                <div className={styles["resume-btn-div"]}>
                  <Button
                    text="Reach me via email"
                    href="mailto:mkumailofficial@gmail.com"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default Contact;
