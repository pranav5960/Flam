"use client";

import { useData } from "@/components/providers/DataProvider";

export default function DashboardHeader() {
  const { fps, latest } = useData();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1e293b",
        padding: "12px 20px",
        borderRadius: 8,
        border: "1px solid #334155",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: 600 }}>Real-Time Dashboard</h1>

      <div style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
        <span style={{ color: "#22c55e" }}>FPS: {fps}</span>
        <span style={{ color: "#38bdf8" }}>
          Latest: {latest ? latest.value.toFixed(2) : "--"}
        </span>
      </div>
    </div>
  );
}
