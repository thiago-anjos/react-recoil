import { useRecoilValue } from "recoil";
import { eventsFilteredState } from "../selectors";

const UseListaDeEventos = () => {
  return useRecoilValue(eventsFilteredState);
};

export default UseListaDeEventos;
