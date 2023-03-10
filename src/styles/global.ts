import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    /* background: ${(props) => props.theme.colors.background}; */
    /* background: rgb(0,21,0); */
    background: radial-gradient(circle, ${(props) =>
      props.theme.colors.primary["primary-700"]} 70%, ${(props) =>
  props.theme.colors.primary.main} 100%);
    color: ${(props) => props.theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 800;
  }

  #__next {
    height: 100vh;
  }
`;
