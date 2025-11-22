import { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";
import "../App.css";

export default function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  return (
    <div className="tarefa">
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => dispatch({ type: "TOGGLE", id: tarefa.id })}
      />

      <span className={`tarefa-texto ${tarefa.concluida ? "tarefa-concluida" : ""}`}>
        {tarefa.nome}
      </span>
    </div>
  );
}
