import { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaDeTarefas from "./components/ListaDeTarefas";
import "./App.css";

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
    <div className="app-container">
      <h1 className="titulo">Gerenciador de Tarefas</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          className="input-material"
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />
        <button className="botao-add" onClick={adicionarTarefa}>
          Adicionar
        </button>
      </div>

      <hr></hr>

      <h3 className="label-filtros">Filtros:</h3>

      <div className="btns-filtros">
        <button className="filter-buttons" onClick={() => dispatch({ type: "FILTRO", filtro: "todas" })}>Todas</button>
        <button className="filter-buttons" onClick={() => dispatch({ type: "FILTRO", filtro: "concluidas" })}>Concluídas</button>
        <button className="filter-buttons" onClick={() => dispatch({ type: "FILTRO", filtro: "pendentes" })}>Pendentes</button>
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
