import {createGlobalStyle} from 'styled-components';

/**
 * Globally used styles for the application.
 * !!! Should be handled by the divisional repos, don't export this style with the module.
 *
 * @author Ben Schnell <schnell@fitmentindustries.com>
 */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Amiri&family=Josefin+Sans:wght@400;500;600;700&family=Quicksand:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'QuickSsand', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.mainBackground};
    min-height: 100vh;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
