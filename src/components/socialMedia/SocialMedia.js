import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import styles from "./SocialMedia.module.css";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia({ theme, socialMediaLinks }) {
  return (
    <div className={styles["social-media-div"]}>
      {socialMediaLinks.map((media, index) => {
        return (
          <a
            href={media.link}
            className={styles[`icon-button`]}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <IconWrapper {...media} {...theme} key={index}>
              <i>
                <Icon icon={`${media.fontAwesomeIcon}`} />
              </i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
