import { useSetRecoilState } from "recoil";
import { eventsListState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useUpdateEvent = () => {
  const setStateEventList = useSetRecoilState<IEvento[]>(eventsListState);
  return (event: IEvento) => {
    return setStateEventList((prevList) => {
      const index = prevList.findIndex((item) => item.id === event.id);
      return [...prevList.slice(0, index), event, ...prevList.slice(index + 1)];
    });
  };
};

export default useUpdateEvent;
