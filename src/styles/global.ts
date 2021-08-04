import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red-primary: #f45b69
    --red-secondary: #ff1133
    --background: #e5e5e5
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
`;
