"use client";

import { useData } from "@/components/providers/DataProvider";
import { useCanvasRenderer } from "@/hooks/useChartRenderer";

export default function BarChart() {
  const { data } = useData();

  const canvasRef = useCanvasRenderer((ctx, width, height) => {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);

    const visibleData = data.slice(-50);
    const len = visibleData.length;
    if (len > 0) {
      const min = Math.min(...visibleData.map((p) => p.value));
      const max = Math.max(...visibleData.map((p) => p.value));
      const barWidth = width / len;

      for (let i = 0; i < len; i++) {
        const x = i * barWidth;
        const y =
          height - ((visibleData[i].value - min) / (max - min)) * height;
        const barHeight = height - y;
        ctx.fillStyle = "#facc15";
        ctx.fillRect(x, y, barWidth - 2, barHeight);
      }
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
      <canvas ref={canvasRef} style={{ width: "100%", height: 150 }} />
    </div>
  );
}
