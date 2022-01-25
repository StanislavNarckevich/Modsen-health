import { createGlobalStyle } from 'styled-components';
import RobotoBold from '../../assets/fonts/Roboto-Bold.ttf';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Roboto', sans-serif;
      src: url(${RobotoBold}) format('ttf');
      font-weight: 700;
      font-style: normal;
      font-display: auto;
    }

    @font-face {
      font-family: 'Roboto', sans-serif;
      src: url(${RobotoRegular}) format('ttf');
      font-weight: 400;
      font-style: normal;
      font-display: auto;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  `;

export default GlobalStyle;
