import { selector } from "recoil";
import { eventsListState, filterEventsState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventsFilteredState = selector({
  key: "eventsFilteredState",
  get: ({ get }) => {
    const filter = get(filterEventsState);
    const allEvents = get(eventsListState);

    const events = allEvents.filter((evento) => {
      if (!filter.data) {
        return true;
      }
      const sameDay = filter.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
      return sameDay;
    });
    return events;
  },
});

export const eventsAsync = selector({
  key: "eventsAsync",
  get: async () => {
    const baseURL = "http://localhost:3001/eventos";
    const response = await fetch(baseURL);
    const data: IEvento[] = await response.json();
    return data.map((evento) => {
      return {
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim),
      };
    });
  },
});
