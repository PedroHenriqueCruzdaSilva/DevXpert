import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../src/theme/globalstyles";
import Menu from "../src/components/Menu";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#ff0000",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
