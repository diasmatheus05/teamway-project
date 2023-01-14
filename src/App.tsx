import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { Routes } from "./router/Routes";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}
