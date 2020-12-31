import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, socialMediaLinksHome } from "../../portfolio";
import { Fade } from "react-reveal";
// import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="">
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {/* <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2> */}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              <SocialMedia
                theme={theme}
                socialMediaLinks={socialMediaLinksHome}
              />

              <div className="portfolio-repo-btn-div">
                <Button
                  text="Resume 📝"
                  newTab={true}
                  href={"/resume"}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
              alt="saad sitting on table"
              src={require("../../assests/images/feelingProud.svg")}
            ></img>
            <FeelingProud theme={theme} /> */}
            <img
              className="myimage"
              src={require("../../assests/images/mk.svg")}
              alt="Muhammad Kumail.img"
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
