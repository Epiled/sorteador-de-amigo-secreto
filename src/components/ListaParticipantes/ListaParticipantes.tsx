import styled from "styled-components";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

const Lista = styled.ul`
  margin-bottom: 15px;
  text-align: center;
`

const Item = styled.li`
  color: var(--graytestColor);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ListaParticipantes: React.FC = () => {

  const participantes: string[] = useListaDeParticipantes();

  return (
    <Lista>
      {participantes.map(participante => {
        return <Item key={participante}>{participante}</Item>
      })}
    </Lista>
  )
}

export default ListaParticipantes;