import { ThemeProvider } from "styled-components";
import { chosenTheme } from "theme";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";

import Layout from "../layout/layout";
import "../styles/globals.css";
import { GlobalStyles } from "../global";
import { styletron } from "../../styletron";

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={chosenTheme}>
          <>
            <GlobalStyles />
            <div>
              <Layout theme={chosenTheme}>
                <Component {...pageProps} theme={chosenTheme} />
              </Layout>
            </div>
          </>
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
