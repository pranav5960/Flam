"use client";

import { useData } from "@/components/providers/DataProvider";
import { useCanvasRenderer } from "@/hooks/useChartRenderer";

export default function Heatmap() {
  const { data } = useData();
  const canvasRef = useCanvasRenderer((ctx, width, height) => {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);

    const visibleData = data.slice(-50);
    const len = visibleData.length;
    if (len === 0) return;

    const min = Math.min(...visibleData.map((p) => p.value));
    const max = Math.max(...visibleData.map((p) => p.value));
    const cellWidth = width / len;

    for (let i = 0; i < len; i++) {
      const intensity = (visibleData[i].value - min) / (max - min || 1);
      ctx.fillStyle = `rgba(16, 185, 129, ${Math.min(intensity + 0.1, 1)})`;
      ctx.fillRect(i * cellWidth, 0, cellWidth - 1, height);
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
      <canvas ref={canvasRef} style={{ width: "100%", height: 100 }} />
    </div>
  );
}
