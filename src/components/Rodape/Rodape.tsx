import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes"
import Botao from "../Botao";
import styled from "styled-components";
import { PlayCircleOutline } from "@styled-icons/material-sharp/PlayCircleOutline";
import sacolas from '../../assets/imgs/sacolas.png';
import { useSorteador } from "../../state/hooks/useSorteador";

const RodapeEstilizado = styled.footer`
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    justify-content: space-between;
  }
`

const Image = styled.img`
  width: 237px;
  height: auto;
`

const IconePersonalizado = styled(PlayCircleOutline)`
  display: none;

  @media screen and (min-width: 600px){
    display: block;
  }
`

const Rodape: React.FC = () => {

  const participantes: string[] = useListaDeParticipantes();
  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteio');
  }

  return (
    <RodapeEstilizado>
      <Botao
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        <IconePersonalizado style={{ marginRight: '25px' }} color='var(--brightestColor)' size={40} />
        Iniciar brincadeira
      </Botao>
      <Image src={sacolas} alt="#" />
    </RodapeEstilizado>
  )
}

export default Rodape;