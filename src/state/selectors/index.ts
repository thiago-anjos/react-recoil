import { selector } from "recoil";
import { eventsListState, filterEventsState } from "../atom";

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
