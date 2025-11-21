import { createContext, useReducer } from "react";

export const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: "todas"
};

function tarefasReducer(state, action) {
  switch (action.type) {
    case "ADICIONAR":
      return {
        ...state,
        tarefas: [...state.tarefas, { id: Date.now(), nome: action.nome, concluida: false }]
      };

    case "TOGGLE":
      return {
        ...state,
        tarefas: state.tarefas.map(t =>
          t.id === action.id ? { ...t, concluida: !t.concluida } : t
        )
      };

    case "FILTRO":
      return { ...state, filtro: action.filtro };

    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(tarefasReducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}
