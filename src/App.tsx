import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Routes } from "./router/Routes";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header
        title="Personality Test Application"
        options={[
          { label: "My Results", to: "/results" },
          { label: "My Profile", to: "/profile" },
        ]}
      />
      <Container>
        <Routes />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
