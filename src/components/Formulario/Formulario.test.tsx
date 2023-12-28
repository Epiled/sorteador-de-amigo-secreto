import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";
import Formulario from "./Formulario";

describe('o comportamento do Formulário.tsx', () => {

  test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira o nome dos participantes');

    // encontrar o botão
    const botao = screen.getByRole('button');

    // garantir que o input esteja no documento
    expect(botao).toBeInTheDocument();

    // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();

  });

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira o nome dos participantes');

    // encontrar o botão
    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Felipe De A",
      }
    })

    // clicar no botão de submeter
    fireEvent.click(botao)

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();

    // garantir que o input não tenha um valor
    expect(input).toHaveValue('');
  });

  test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira o nome dos participantes');
    const botao = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: "Felipe De A",
      }
    })
    fireEvent.click(botao)

    fireEvent.change(input, {
      target: {
        value: "Felipe De A",
      }
    })
    fireEvent.click(botao)

    const mensagemDeErro = screen.getByRole('alert')

    expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
  });

  test('a mensagem de erro deve sumir após dos timers', () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText('Insira o nome dos participantes');
    const botao = screen.getByRole('button');
    fireEvent.change(input, {
      target: {
        value: "Felipe De A",
      }
    })
    fireEvent.click(botao)
    fireEvent.change(input, {
      target: {
        value: "Felipe De A",
      }
    })
    fireEvent.click(botao)

    let mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeInTheDocument()

    // a mensagem deve sumir após N segundos
    act(() => {
      /* fire events that update state */
      jest.runAllTimers()
    });

    mensagemDeErro = screen.queryByRole('alert')
    expect(mensagemDeErro).toBeNull();

  });

})
