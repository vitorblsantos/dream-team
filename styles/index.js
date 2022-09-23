import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyles = createGlobalStyle`
  :root {
    color: #fff;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.15;
  }

  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    text-decoration: none;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 100%;
    list-style-type: none;
    transition: all .2s ease-in-out;
  }

  img {
    height: auto;
    width: 100%;
  }

  ul {
    margin: 0
  }
`

export { colors }
export default GlobalStyles
