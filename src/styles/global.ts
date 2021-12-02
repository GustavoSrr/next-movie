import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --backgroundColor: #fff;
    --darkerColor: #f0f0f0;
    --darkTitleColor: #333333;
    --darkTextColor: #444444;
    --lightTitleColor: #f0f0f0;
    --lightTextColor: #e0e0e0;
    --greenColor: #45ce6e;
    --greenColorTransparent: #45ce6e30;
    --yellowColor: #e6be0e;
    --yellowColorTransparent: #e6be0e30;
    --redColor: #ee2a2a;
    --redColorTransparent: #ee2a2a30;
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
