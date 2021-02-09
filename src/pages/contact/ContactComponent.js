import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Zoom } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData, socialMediaLinks } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Zoom duration={1000}>
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                {/* <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                /> */}
                <AddressImg theme={theme} />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia
                  theme={theme}
                  socialMediaLinks={socialMediaLinks}
                />
                <div className="resume-btn-div">
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
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
