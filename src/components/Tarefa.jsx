import { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";

export default function Tarefa({ tarefa }) {
  const { dispatch } = useContext(TarefasContext);

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => dispatch({ type: "TOGGLE", id: tarefa.id })}
      />
      <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
        {tarefa.nome}
      </span>
    </div>
  );
}
