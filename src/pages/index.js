import React, { Component } from 'react';
import Greeting from '../containers/greeting/Greeting';
import Skills from '../containers/skills/Skills';

const IndexPage = ({ theme }) => {
  return (
    <div>
      {/* <Helmet>
          ‍<title>Muhammad Kumail | TheRealMVP</title>‍
          <meta
            name="description"
            content="Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, Freelancer, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and leads Google Developers Student Club at NUST"
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Resume | TheRealMVP" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/home"
          />
          <meta
            name="twitter:description"
            content="Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, Freelancer, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and leads Google Developers Student Club at NUST"
          />
          <meta property="og:title" content="Muhammad Kumail | TheRealMVP" />{" "}
          <meta
            property="og:description"
            content="Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, Freelancer, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and leads Google Developers Student Club at NUST"
          />
          <meta property="og:url" content="https://muhammadkumail.com/" />
          <meta
            property="og:site_name"
            content="Muhammad Kumail | TheRealMVP"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet> */}
      <Greeting theme={theme} />
      <Skills theme={theme} />
    </div>
  );
};

export default IndexPage;
