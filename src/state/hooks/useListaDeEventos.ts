import { useRecoilValue } from "recoil";
import { eventsListState } from "../atom";

const UseListaDeEventos = () => {
  return useRecoilValue(eventsListState);
};

export default UseListaDeEventos;
