"use client";
import { useState } from "react";
import { useData } from "../providers/DataProvider";

export default function FilterPanel() {
  const [range, setRange] = useState(100);
  const { data } = useData();

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <label>Visible Points: </label>
      <input
        type="range"
        min="50"
        max="10000"
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
      />
      <span>{range}</span>
    </div>
  );
}
