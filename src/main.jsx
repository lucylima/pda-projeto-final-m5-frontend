import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BitProvider } from "./context/bitsContext.jsx";
import { NoteProvider } from "./context/noteContext.jsx";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <NoteProvider>
      <BitProvider>
        <App />
      </BitProvider>
    </NoteProvider>
  </StrictMode>
);
