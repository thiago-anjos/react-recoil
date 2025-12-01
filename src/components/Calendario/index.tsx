import React from "react";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from "kalend";
import "kalend/dist/styles/index.css";
import { eventsListState } from "../../state/atom";
import { useRecoilValue } from "recoil";
import useUpdateEvent from "../../state/hooks/useAtualizarEvento";

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();

  const updateEvent = useUpdateEvent();

  const eventos = useRecoilValue(eventsListState);

  eventos.forEach((evento) => {
    const chave = evento.inicio.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: "blue",
    });
  });

  const onEventDragFinish: OnEventDragFinish = (kalendEventoInalterado: CalendarEvent, KalendEventoAtualizado: CalendarEvent) => {
    const event = eventos.find((event) => event.descricao === KalendEventoAtualizado.summary);
    if (event) {
      const eventUpdated = {
        ...event,
      };
      eventUpdated.inicio = new Date(KalendEventoAtualizado.startAt);
      eventUpdated.fim = new Date(KalendEventoAtualizado.endAt);
      updateEvent(eventUpdated);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendario;
