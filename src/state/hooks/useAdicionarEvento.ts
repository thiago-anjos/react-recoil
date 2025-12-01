import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obtainId } from "../../util";
import { eventsListState } from "../atom";

const UserAdicionarEvento = () => {
  const setStateEventList = useSetRecoilState<IEvento[]>(eventsListState);
  return (event: IEvento) => {
    const today = new Date();
    if (event.inicio < today) {
      throw new Error("Evento com data menor que a atual");
    }
    event.id = obtainId();
    return setStateEventList((prevList) => [...prevList, event]);
  };
};

export default UserAdicionarEvento;
