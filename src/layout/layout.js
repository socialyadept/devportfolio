import React from "react";
import { useRouter } from "next/router";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout({ children, theme }) {
  const router = useRouter();

  if (router.asPath == "/resume") {
    return <main>{children}</main>;
  }

  return (
    <React.Fragment>
      <Header theme={theme} />
      <main>{children}</main>
      <Footer theme={theme} />
    </React.Fragment>
  );
}
