import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";
import { useSetRecoilState } from "recoil";
import { eventsListState } from "../../state/atom";

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const estilos = [style.Evento];
  const setStateEventList = useSetRecoilState<IEvento[]>(eventsListState);

  const deleteEvent = () => {
    setStateEventList((prevList) => prevList.filter((evt) => evt.id !== evento.id));
  };

  if (evento.completo) {
    estilos.push(style.completo);
  }

  return (
    <div className={estilos.join(" ")}>
      <EventoCheckbox evento={evento} />
      <div className="cards-info">
        <h3 className={style.descricao}>
          {evento.descricao} - {evento.inicio.toLocaleDateString()}
        </h3>
      </div>
      <i className="far fa-times-circle fa-2x" onClick={deleteEvent}></i>
    </div>
  );
};

export default Evento;
