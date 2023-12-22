import styled from 'styled-components';
import React from 'react';
import logoPequeno from '../../assets/imgs/logo-pequeno.png';
import logo from '../../assets/imgs/logo.png';
import participante from '../../assets/imgs/participante.png';

const CabecalhoComponente = styled.header`
  background-color: var(--mainColor);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: center;
    min-height: 454px;
  }
`;

const Logo = styled.div<{alt: string}>`
  background: url(${logoPequeno}) no-repeat center center;
  background-size: contain;
  width: 100%;
  height: 157px;

  @media screen and (max-width: 1024px){
    margin-top: 30px;
  }

  @media screen and (min-width: 1024px){
    background-image: url(${logo});
    height: 117px;
    max-width: 351px;
  }
`;

const Participante = styled.img`
  width: auto;
  height: 158px;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 1024px){
    height: 277px;
  }
`;

const Cabecalho: React.FC = () => {
  return (
    <CabecalhoComponente>
      <Logo role="img" alt="Logo" />
      <Participante src={participante} alt="Participante" />
    </CabecalhoComponente>
  );
};

export default Cabecalho;
