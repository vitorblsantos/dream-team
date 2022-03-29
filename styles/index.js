import { createGlobalStyle } from 'styled-components'

import colors from './colors'

const GlobalStyles = createGlobalStyle`
  :root {
    color: #333;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }

  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
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

  .theme-dark {
    background: #181818;
    color: #fff;
  }
`

export { colors }
export default GlobalStyles
