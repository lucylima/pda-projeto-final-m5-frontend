import { PieChart } from "@mui/x-charts/PieChart";

function MoodPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Alegria 😄" },
            { id: 1, value: 15, label: "Raiva 😠" },
            { id: 2, value: 20, label: "Tristeza 😢" },
            { id: 3, value: 20, label: "Medo 😢" },
            { id: 4, value: 20, label: "Nojo 🤢" },
            { id: 5, value: 20, label: "Surpresa 😧" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

export { MoodPieChart };
