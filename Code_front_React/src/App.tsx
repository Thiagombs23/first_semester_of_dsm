import React, { useState } from "react";
import Entrada from "./components/Entrada";
import Lista from "./Lista";
import Contexto from "./Contexto";

export default function App() {
  const [lista, setLista] = useState([] as string[]);

  function add(nome: string) {
    const temp = [...lista, nome];
    setLista(temp);
  }
  return (
    <Contexto.Provider value={{lista,add}}>
      <Entrada  />
     <Lista  />
    </Contexto.Provider>
  );
}
