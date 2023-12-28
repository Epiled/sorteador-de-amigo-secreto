import { createGlobalStyle } from 'styled-components';

const EstilosGlobais = createGlobalStyle`
  :root {
    --mainColor: #4B69FD;
    --secondaryColor: #FE652B;
    --secondaryColor-alt: #f39674;
    --darkColor: #000000;
    --darkColor-30: rgba(0, 0, 0, 0.30);
    --brightColor: #FFF9EB;
    --brightestColor: #ffffff;
    --grayColor: #C4C4C4;
    --graytestColor: #444;

    --mobile: 768px;
    --desktop: 1024px;
  }
`

export default EstilosGlobais