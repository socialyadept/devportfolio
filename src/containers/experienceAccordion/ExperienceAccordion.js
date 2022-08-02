import React, { Component } from "react";
import { Accordion, Panel } from "baseui/accordion";

import ExperienceCard from "components/experienceCard/ExperienceCard.js";
import styles from "./ExperienceAccordion.module.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className={styles["experience-accord"]}>
        <Accordion onChange={({ expanded }) => console.log(expanded)} renderAll>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className={styles["accord-panel"]}
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience, key) => (
                  <ExperienceCard
                    key={key}
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
