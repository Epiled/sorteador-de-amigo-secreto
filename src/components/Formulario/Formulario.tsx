import { useRef, useState } from "react";
import { useAdicionarParticipantes } from "../../state/hooks/useAdicionarParticipantes";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";
import styled from "styled-components";
import Botao from "../Botao";
import { PersonAdd } from "@styled-icons/material-sharp/PersonAdd";

const FormularioEstilizado = styled.form`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 600px){
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0px;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`

const InputEstilizado = styled.input`
  outline: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 14px 25px 14px 65px;

  border-radius: 37.5px;
  border: 1px solid var(--darkColor);
  background: var(--brightest);
  box-shadow: 2px 2px 0px 0px var(--darkColor);
  box-sizing: border-box;

  width: 100%;
  height: 48px;

  ::placeholder {
    color: var(--darkColor-30);
  }

  @media screen and (min-width: 600px){
    height: 80px;
    padding: 18px 35px 18px 100px;
    font-size: 16px;

    border-radius: 37.5px 0px 0px 37.5px;
    border: 2px solid var(--darkColor);
    box-shadow: 4px 4px 0px 0px var(--darkColor);
  }
`

const IconePersonAdd = styled(PersonAdd)`
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);

  @media screen and (min-width: 600px){
    left: 50px;
  }
`

const AlertaPersonalizado = styled.p`
  display: block;
  width: 100%;
  margin-top: 30px;
  text-align: center;
`

const Formulario: React.FC = () => {
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipantes();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus()
  }

  return (
    <FormularioEstilizado onSubmit={adicionarParticipante}>
      <InputContainer>
        <IconePersonAdd color='var(--darkColor-30)' size={24} />
        <InputEstilizado
          ref={inputRef}
          value={nome}
          type='text'
          placeholder='Insira o nome dos participantes'
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <Botao
        estiloPadrao={false}
        disabled={!nome}
      >
        Adicionar
      </Botao>
      {mensagemDeErro && <AlertaPersonalizado role='alert'>{mensagemDeErro}</AlertaPersonalizado>}
    </FormularioEstilizado>
  )
};

export default Formulario;