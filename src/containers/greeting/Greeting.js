import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

import styles from "./Greeting.module.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, socialMediaLinksHome } from "../../portfolio";
import MKImage from "../../../public/images/mk.svg";
// import FeelingProud from "../../atoms/FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <Fade direction="bottom" duration={2000} triggerOnce distance="40px">
      <div className={styles["greet-main"]} id="greeting">
        <div className={styles["greeting-main"]}>
          <div className={styles["greeting-text-div"]}>
            <div className="">
              <h1
                className={styles["greeting-text"]}
                style={{ color: theme.text }}
              >
                {greeting.title}
              </h1>
              {/* <h2 className={styles["greeting-nickname"]} style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2> */}
              <p
                className={styles["greeting-text-p"]}
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              <SocialMedia
                theme={theme}
                socialMediaLinks={socialMediaLinksHome}
              />

              <div className={styles["portfolio-repo-btn-div"]}>
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
          <div className={styles["greeting-image-div"]}>
            {/* <img
              alt="saad sitting on table"
              src={require("../../assests/images/feelingProud.svg")}
            ></img>
            <FeelingProud theme={theme} /> */}
            <Image
              className={styles["myimage"]}
              height={450}
              width={450}
              src={MKImage}
              alt="Muhammad Kumail.img"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
