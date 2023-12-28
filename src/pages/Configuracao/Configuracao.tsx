import Card from "../../components/Card";
import Formulario from "../../components/Formulario/Formulario";
import ListaParticipantes from "../../components/ListaParticipantes/ListaParticipantes";
import Rodape from "../../components/Rodape/Rodape";
import Titulo from "../../components/Titulo";

const Configuracao: React.FC = () => {
  return (
    <Card>
      <Titulo>Vamos começar!</Titulo>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </Card>
  );
}

export default Configuracao;