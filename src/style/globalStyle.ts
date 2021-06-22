import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Roboto', sans-serif;
  }
`