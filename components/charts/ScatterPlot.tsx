"use client";

import { useData } from "@/components/providers/DataProvider";
import { useCanvasRenderer } from "@/hooks/useChartRenderer";

export default function ScatterPlot() {
  const { data } = useData();

  const canvasRef = useCanvasRenderer((ctx, width, height) => {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);

    const visibleData = data.slice(-500);
    const len = visibleData.length;
    if (len === 0) return;

    const min = Math.min(...visibleData.map((p) => p.value));
    const max = Math.max(...visibleData.map((p) => p.value));

    for (let i = 0; i < len; i++) {
      const x = (i / (len - 1)) * width;
      const y =
        height - ((visibleData[i].value - min) / (max - min || 1)) * height;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#f87171";
      ctx.fill();
    }
  });

  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #334155",
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
      }}
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: 200 }} />
    </div>
  );
}
