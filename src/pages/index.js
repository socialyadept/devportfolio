import React, { Component } from "react";

import SEO from "components/SEO";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";

const IndexPage = ({ theme }) => {
  return (
    <>
      <SEO />
      <Greeting theme={theme} />
      <Skills theme={theme} />
    </>
  );
};

export default IndexPage;
