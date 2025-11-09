"use client";

import { useEffect, useRef, useCallback } from "react";

export function useCanvasRenderer(
  draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => void
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;

    const render = () => {
      draw(ctx, canvas.width, canvas.height);
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrame);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
    observer.observe(canvas);

    resizeCanvas();

    return () => observer.disconnect();
  }, [resizeCanvas]);

  return canvasRef;
}
