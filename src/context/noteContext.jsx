import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [note, setNote] = useState([]);
  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export { NoteContext, NoteProvider };
