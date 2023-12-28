import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button<IBotao>`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
    
  border-radius: 37.5px;
  border: 1px solid var(--darkColor);
  background: ${props => props.estiloPadrao ? 'var(--secondaryColor)' : 'var(--grayColor)'};
  box-shadow: 2px 2px 0px 0px var(--darkColor);

  color: ${props => props.estiloPadrao ? 'var(--brightestColor)' : 'var(--graytestColor)'};

  font-size: 16px;
  font-style: normal;
  font-weight: ${props => props.estiloPadrao ? '600' : '400'};
  line-height: normal;
  letter-spacing: 0.25px;

  height: 48px;
  min-width: 155px;
  padding: 0 24px;
  box-sizing: border-box;
  vertical-align: bottom;
  z-index: 1;

  &:hover {
    background: var(--mainColor);
    color: var(--brightestColor);
    cursor: pointer;
  }


  &:disabled {
    background: ${props => props.estiloPadrao ? 'var(--secondaryColor-alt)' : 'var(--grayColor)'};
    color: ${props => props.estiloPadrao ? 'var(--brightestColor)' : 'var(--graytestColor)'};
    cursor: auto;
  }

  @media screen and (min-width: 600px){
    padding: 0 40px;
    height: 80px;
    font-size: ${props => props.estiloPadrao ? '20px' : '16px'};

    border-top-right-radius: 37.5px;
    border-bottom-left-radius: ${props => props.estiloPadrao ? '37.5px' : '0'};
    border-bottom-right-radius: 37.5px;
    border-top-left-radius: ${props => props.estiloPadrao ? '37.5px' : '0'};

    border: 2px solid var(--darkColor);
    box-shadow: 4px 4px 0px 0px var(--darkColor);
  }

`

interface IBotao extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  estiloPadrao?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Botao: React.FC<IBotao> = ({
  children = 'Botao',
  estiloPadrao = true,
  disabled,
  onClick,
}) => {
  return (
    <BotaoEstilizado
      estiloPadrao={estiloPadrao}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </BotaoEstilizado>
  )
}

export default Botao;