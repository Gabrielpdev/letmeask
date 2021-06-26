import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100%;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Roboto', sans-serif;
  }
  
  button{
    cursor: pointer;
  }

  body, #root {
    height: 100%;
  }
`