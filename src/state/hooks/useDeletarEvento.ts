import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { eventsListState } from "../atom";

const useDeletarEvento = () => {
  const setStateEventList = useSetRecoilState<IEvento[]>(eventsListState);
  return (event: IEvento) => {
    setStateEventList((prevList) => prevList.filter((evt) => evt.id !== event.id));
  };
};

export default useDeletarEvento;
