"use client";
import { useData } from "../providers/DataProvider";
import { useRef, useState, useEffect } from "react";

export default function DataTable() {
  const { data } = useData();
  const rowHeight = 20;
  const containerHeight = 200;
  const [scrollTop, setScrollTop] = useState(0);

  const visibleCount = Math.ceil(containerHeight / rowHeight);
  const startIndex = Math.floor(scrollTop / rowHeight);
  const visibleRows = data.slice(startIndex, startIndex + visibleCount);

  return (
    <div
      style={{
        height: containerHeight,
        overflowY: "auto",
        background: "#1e293b",
        color: "#e2e8f0",
        borderRadius: 8,
        padding: 8,
      }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: data.length * rowHeight, position: "relative" }}>
        {visibleRows.map((d, i) => (
          <div
            key={startIndex + i}
            style={{
              position: "absolute",
              top: (startIndex + i) * rowHeight,
              height: rowHeight,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              fontSize: 12,
            }}
          >
            <span>{new Date(d.timestamp).toLocaleTimeString()}</span>
            <span>{d.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
