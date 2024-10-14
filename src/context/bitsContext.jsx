import { createContext, useState } from "react";

const BitContext = createContext();

function BitProvider({ children }) {
  const [bit, setBit] = useState([]);
  return (
    <BitContext.Provider value={{ bit, setBit }}>
      {children}
    </BitContext.Provider>
  );
}

export { BitContext, BitProvider };
