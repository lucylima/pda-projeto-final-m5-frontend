import { Header } from "../../components/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { MoodPieChart } from "../../components/MoodPieChart/MoodPieChart";
function MoodChartsPage() {
  return (
    <>
      <Header />
      <MoodPieChart></MoodPieChart>
      <Navigation />
    </>
  );
}

export { MoodChartsPage };
