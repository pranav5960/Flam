import DashboardHeader from "@/components/dashboard/DashboardHeader";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import ScatterPlot from "@/components/charts/ScatterPlot";
import Heatmap from "@/components/charts/Heatmap";
import DataProvider from "@/components/providers/DataProvider";
import { generateInitialDataset } from "@/lib/dataGenerator";

export default async function DashboardPage() {
  const initialData = await generateInitialDataset();

  return (
    <DataProvider initialData={initialData}>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "20px",
          gap: "20px",
        }}
      >
        <DashboardHeader />
        <LineChart />
        <BarChart />
        <ScatterPlot />
        <Heatmap />
      </main>
    </DataProvider>
  );
}
