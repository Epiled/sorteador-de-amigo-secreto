import { useEffect, useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Botao from "../../components/Botao";
import { Casino } from "@styled-icons/material/Casino";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styled from "styled-components";
import aviao from '../../assets/imgs/aviao.png';

const FormularioEstilizado = styled.form`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SelectEstilizado = styled.select`
  outline: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 14px 25px;

  border-radius: 37.5px;
  border: 1px solid var(--darkColor);
  background: var(--brightest);
  box-shadow: 2px 2px 0px 0px var(--darkColor);
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  max-width: 475px;

  ::placeholder {
    color: var(--darkColor-30);
  }

  @media screen and (min-width: 600px){
    height: 80px;
    padding: 18px 35px;
    font-size: 16px;

    border-radius: 37.5px;
    border: 2px solid var(--darkColor);
    box-shadow: 4px 4px 0px 0px var(--darkColor);
  }
`

const Texto = styled.p`
  font-size: 20px;
  text-align: center;
  color: var(--darkColor);
  margin-top: 35px;
  margin-bottom: 25px;
`

const AlertaPersonalizado = styled.p`
  color: var(--secondaryColor);
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const IconePersonalizado = styled(Casino)`
  display: none;

  @media screen and (min-width: 600px){
    display: block;
  }
`

const Image = styled.img`
  width: 150px;
  height: auto;
  margin: 0 auto;
  margin-top: 32px;
`

const Sorteio: React.FC = () => {

  const participantes = useListaDeParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
      setTimeout(() => {
        setAmigoSecreto('')
      }, 5000)
    }
  }

  return (
    <Card>
      <Titulo>Quem vai tirar o papelzinho?</Titulo>
      <FormularioEstilizado onSubmit={sortear}>
        <SelectEstilizado
          required
          name='participantesDaVez'
          id='participantesDaVez'
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map(participante => <option key={participante}>{participante}</option>)}
        </SelectEstilizado>

        <Texto>Clique em em sortear para ver quem é seu amigo secreto!</Texto>

        <Botao>
        <IconePersonalizado style={{ marginRight: '25px' }} color='var(--brightestColor)' size={40} />
          Sortear!
        </Botao>
      </FormularioEstilizado>
      {amigoSecreto && <AlertaPersonalizado role='alert'>{amigoSecreto}</AlertaPersonalizado>}
      <Image src={aviao} alt="#" />
    </Card>
  )
}

export default Sorteio;