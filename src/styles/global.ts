import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --backgroundColor: #fff;
    --darkerColor: #f0f0f0;
    --titleColor: #333333;
    --textColor: #444444;
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
