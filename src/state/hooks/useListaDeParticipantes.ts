import { useRecoilValue } from "recoil"
import { listaParticipanteState } from "../atom"

export const useListaDeParticipantes = () => {
  return useRecoilValue(listaParticipanteState)
}