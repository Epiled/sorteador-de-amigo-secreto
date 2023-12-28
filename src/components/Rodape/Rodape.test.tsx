import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";


jest.mock('../../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

jest.mock('../../state/hooks/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio
  }
})

describe('quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    // encontrar o botão
    const botao = screen.getByRole('button');

    // espera que o botão esteja desabilitado
    expect(botao).toBeDisabled();
  })
});

describe('quando existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Felipe', 'Marcia'])
  })

  test('a brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    // encontrar o botão
    const botao = screen.getByRole('button');

    // espera que o botão esteja desabilitado
    expect(botao).not.toBeDisabled();
  })

  test('a brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    // encontrar o botão
    const botao = screen.getByRole('button');
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  })
});