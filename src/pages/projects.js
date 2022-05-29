import React, { Component } from "react";

import GithubRepoCard from "components/githubRepoCard/GithubRepoCard";
import Button from "components/button/Button";
import { Zoom } from "react-awesome-reveal";
import { projectsHeader } from "../portfolio.js";
import ProjectsData from "shared/opensource/projects.json";
import styles from "styles/Projects.module.css";
import ProjectsImg from "atoms/ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["projects-main"]}>
        {/* <Helmet>
          ‍<title>Projects | TheRealMVP</title>‍
          <meta
            name="description"
            content="What's better when Kumail's project speak for itself and explains his tech skills in a better way"
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Projects | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/projects"
          />
          <meta
            name="twitter:description"
            content="What's better when Kumail's project speak for itself and explains his tech skills in a better way"
          />{" "}
          <meta property="og:title" content="Projects | TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="What's better when Kumail's project speak for itself and explains his tech skills in a better way"
          />
          <meta
            property="og:url"
            content="https://muhammadkumail.com/projects"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet> */}
        <div className={styles["basic-projects"]}>
          <Zoom duration={1000}>
            <div className={styles["projects-heading-div"]}>
              <div className={styles["projects-heading-img-div"]}>
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className={styles["projects-heading-text-div"]}>
                <h1
                  className={styles["projects-heading-text"]}
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className={styles["projects-header-detail-text"]}
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Zoom>
        </div>
        <div className={styles["repo-cards-div-main"]}>
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className={"project-button"}
          href="https://github.com/mkumail1"
          newTab={true}
          theme={theme}
        />
      </div>
    );
  }
}

export default Projects;
