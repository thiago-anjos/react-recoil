import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventsAsync } from "./selectors";

export const eventsListState = atom<IEvento[]>({
  key: "eventsList",
  default: eventsAsync,
});

export const filterEventsState = atom<IFiltroDeEventos>({
  key: "filterEvents",
  default: {},
});
