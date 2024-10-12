import { createContext, useState } from "react";

const BitContext = createContext();

function BitProvider({ children }) {
  const [bit, setBit] = useState([
    {
      bits_id: "bac52b91",
      text: "Hoje estou triste demais!",
      createdAt: "2024-10-08T23:30:08.900Z",
      User: {
        username: "Teste2",
      },
    },
  ]);
  return (
    <BitContext.Provider value={{ bit, setBit }}>
      {children}
    </BitContext.Provider>
  );
}

export { BitContext, BitProvider };
