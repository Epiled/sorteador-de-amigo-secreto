import { ReactNode } from "react"
import styled from "styled-components";

const TituloEstilizado = styled.h1`
  color: var(--mainColor);
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 1024px){
    font-size: 32px;
  }
`

const Titulo: React.FC = ({children}) => {
  return (
    <TituloEstilizado>
      {children}
    </TituloEstilizado>
  )
}

export default Titulo;