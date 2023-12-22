import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
  :root {
    --mainColor: #4B69FD;
    --secondaryColor: #FE652B;
    --darkColor: #000000;
    --brightColor: #FFF9EB;

    --mobile: 768px;
    --desktop: 1024px;
  }
`

export default EstilosGlobais