import { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";
import Tarefa from "./Tarefa";

export default function ListaDeTarefas() {
  const { state } = useContext(TarefasContext);

  const tarefasFiltradas = state.tarefas.filter(t => {
    if (state.filtro === "concluidas") return t.concluida;
    if (state.filtro === "pendentes") return !t.concluida;
    return true;
  });

  return (
    <div style={{ marginTop: "20px" }}>
      {tarefasFiltradas.map(t => (
        <Tarefa key={t.id} tarefa={t} />
      ))}
    </div>
  );
}
