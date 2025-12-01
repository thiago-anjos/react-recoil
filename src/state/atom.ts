import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const eventsListState = atom<IEvento[]>({
  key: "eventsList",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2025-12-05T09:00"),
      fim: new Date("2025-12-06T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2025-12-07T09:00"),
      fim: new Date("2025-12-08T13:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});

export const filterEventsState = atom<IFiltroDeEventos>({
  key: "filterEvents",
  default: {},
});
