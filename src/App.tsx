import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Cabecalho from "./components/Cabecalho";
import Configuracao from "./pages/Configuracao/Configuracao";
import Sorteio from "./pages/Sorteio/Sorteio";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Cabecalho />
        <Routes>
          <Route index path="/" element={<Configuracao />} />
          <Route path='/sorteio' element={<Sorteio />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
