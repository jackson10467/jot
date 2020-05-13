import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
    font-size: 18px;
  }

  *, ::before, ::after{
    box-sizing: inherit;
  }

  #root, html, body{
    width:100%;
  }

  body{
    /* font family goes here */
    /* import it in the public/html on line 11 */
    background-color:whitesmoke
  }
` 

export default GlobalStyle