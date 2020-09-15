import { createGlobalStyle } from 'styled-components';

import InterRegularWoff2 from 'fonts/inter-regular-webfont.woff2';
import InterRegularWoff from 'fonts/inter-regular-webfont.woff';
import InterBoldWoff2 from 'fonts/inter-bold-webfont.woff2';
import InterBoldWoff from 'fonts/inter-bold-webfont.woff';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'inter';
    src: url(${InterRegularWoff2}) format('woff2'),
      url(${InterRegularWoff}) format('woff');
    font-weight: regular;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'inter';
    src: url(${InterBoldWoff2}) format('woff2'),
      url(${InterBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    font-family: 'inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.cPrimary_100};
    background: ${({ theme }) => theme.cPrimary_1000};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  :focus {outline:none;}
  ::-moz-focus-inner {border:0;}

  a > svg, button > svg {
    vertical-align: middle;
  }

  //Utility classes
  .no-scroll {
    overflow: hidden;
  }

`;

export default GlobalStyle;