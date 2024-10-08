import { LoginPage } from "./pages/login/LoginPage.jsx";
import { RegisterPage } from "./pages/register/RegisterPage.jsx";
import { BlissFieldsPage } from "./pages/blissFields/BlissFieldsPage.jsx";
import { MoodChartsPage } from "./pages/moodcharts/MoodChartsPage.jsx";
import { NotePage } from "./pages/notes/NotePage.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Header } from "./components/Header/Header.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <NotePage />
      </ThemeProvider>
    </>
  );
}

export default App;
