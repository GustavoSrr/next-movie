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
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background-color: var(---backgroundColor);
    color: var(--textColor)
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`
