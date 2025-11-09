"use client";
import { useData } from "../providers/DataProvider";
import { useEffect, useState } from "react";

export default function PerformanceMonitor() {
  const { fps } = useData();
  const [mem, setMem] = useState<number>(0);

  useEffect(() => {
    if ((performance as any).memory) {
      const interval = setInterval(() => {
        const used = (performance as any).memory.usedJSHeapSize / 1024 / 1024;
        setMem(Number(used.toFixed(2)));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "#1e293b",
        padding: "8px 12px",
        borderRadius: 8,
        color: "#a3e635",
        fontSize: 14,
      }}
    >
      FPS: {fps} | Memory: {mem} MB
    </div>
  );
}
