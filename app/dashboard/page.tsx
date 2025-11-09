import LineChart from "@/components/charts/LineChart";
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
        <h1 style={{ fontSize: "24px" }}>Real-Time Dashboard</h1>
        <LineChart />
      </main>
    </DataProvider>
  );
}
