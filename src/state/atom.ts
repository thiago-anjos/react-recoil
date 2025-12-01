import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const eventsListState = atom<IEvento[]>({
  key: "eventsList",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2025-11-30T09:00"),
      fim: new Date("2025-12-15T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2025-11-30T09:00"),
      fim: new Date("2025-12-15T13:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
