import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { MoodPieChart } from "../../components/MoodPieChart/MoodPieChart";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function MoodChartsPage() {
  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography variant="h5" textAlign="center">
          Nª de notas por emoções
        </Typography>
        <MoodPieChart />
      </Container>
      <Navigation />
    </>
  );
}

export { MoodChartsPage };
