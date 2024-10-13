import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BitProvider } from "./context/bitsContext.jsx";
import { NoteProvider } from "./context/noteContext.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./router/router.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteProvider>
      <BitProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={Router} />
        </ThemeProvider>
      </BitProvider>
    </NoteProvider>
  </StrictMode>
);
