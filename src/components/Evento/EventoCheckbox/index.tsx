import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import useUpdateEvent from "../../../state/hooks/useAtualizarEvento";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const updateEvent = useUpdateEvent();
  const alterarStatus = () => {
    const newEvent = { ...evento };
    newEvent.completo = !newEvent.completo;
    updateEvent(newEvent);
  };

  const estilos = ["far", "fa-2x", evento.completo ? "fa-check-square" : "fa-square"];

  return <i className={estilos.join(" ")} onClick={alterarStatus}></i>;
};

export default EventoCheckbox;
