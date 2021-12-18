import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --backgroundColor: #181818;
    --complementaryColor: #1C1C1C;
    --primaryColor: #4A88C1;
    --titleColor: #CCD6DD;
    --textColor: #A7A7A7;
    --greenColor: #45ce6e;
    --greenColorTransparent: #45ce6e30;
    --yellowColor: #e6be0e;
    --yellowColorTransparent: #e6be0e30;
    --redColor: #ee2a2a;
    --redColorTransparent: #ee2a2a30;
    --grayColor: #797979;
    --grayColorTransparent: #79797930;
  }

  html {
    background-color: #181818;

    scrollbar-width: thin;
    scrollbar-color: #4A88C1 #1C1C1C;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: var(---backgroundColor);
    color: var(--textColor);

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: var(--complementaryColor);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      border: 3px solid var(--complementaryColor);
      background-color: var(--primaryColor);
    }
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  h1 {
    font-size: 35px;

    @media only screen and (max-width: 1020px) {
      font-size: 30px;
    }

    @media only screen and (max-width: 450px) {
      font-size: 23px;
    }
  }

  h2 {
    font-size: 24px;

    @media only screen and (max-width: 1020px) {
      font-size: 20px;
    }
  }
`
