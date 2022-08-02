import React, { Component } from "react";

import SEO from "components/SEO";
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
      <>
        <SEO
          title="Projects"
          descrip="What's better when the projects speak for itself and explains the tech skills in a better way"
          url="projects"
        />
        <div className={styles["projects-main"]}>
          <div className={styles["basic-projects"]}>
            <Zoom duration={1000} triggerOnce>
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
            {ProjectsData.data.map((repo, i) => {
              return (
                <GithubRepoCard
                  key={`repo_id_${i}`}
                  repo={repo}
                  theme={theme}
                />
              );
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
      </>
    );
  }
}

export default Projects;
