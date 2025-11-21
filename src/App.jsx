import { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaDeTarefas from "./components/ListaDeTarefas";

function AppInterno() {
  const [texto, setTexto] = useState("");
  const { dispatch } = useContext(TarefasContext);

  function adicionarTarefa() {
    if (texto.trim()) {
      dispatch({ type: "ADICIONAR", nome: texto });
      setTexto("");
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch({ type: "FILTRO", filtro: "todas" })}>Todas</button>
        <button onClick={() => dispatch({ type: "FILTRO", filtro: "concluidas" })}>Concluídas</button>
        <button onClick={() => dispatch({ type: "FILTRO", filtro: "pendentes" })}>Pendentes</button>
      </div>

      <ListaDeTarefas />
    </div>
  );
}

export default function App() {
  return (
    <TarefasProvider>
      <AppInterno />
    </TarefasProvider>
  );
}
