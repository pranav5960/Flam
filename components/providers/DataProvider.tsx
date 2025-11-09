"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
} from "react";
import type { DataPoint } from "@/lib/dataGenerator";
interface DataContextValue {
  data: DataPoint[];
  latest: DataPoint | null;
  fps: number;
  min: number;
  max: number;
}
const DataContext = createContext<DataContextValue>({
  data: [],
  latest: null,
  fps: 0,
  min: 0,
  max: 0,
});
export function useData() {
  return useContext(DataContext);
}
export default function DataProvider({
  initialData,
  children,
}: {
  initialData: DataPoint[];
  children: ReactNode;
}) {
  const maxPoints = 10000;
  const dataRef = useRef<DataPoint[]>([...initialData]);
  const [data, setData] = useState<DataPoint[]>([...initialData]);
  const [fps, setFps] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const frameTimes = useRef<number[]>([]);

  useEffect(() => {
    let animationFrame: number;

    const updateFps = () => {
      const now = performance.now();
      frameTimes.current.push(now);
      while (frameTimes.current[0] <= now - 1000) frameTimes.current.shift();
      setFps(frameTimes.current.length);
      animationFrame = requestAnimationFrame(updateFps);
    };

    animationFrame = requestAnimationFrame(updateFps);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next: DataPoint = {
        timestamp: Date.now(),
        value: Math.sin(Date.now() / 500) * 50 + 100 + Math.random() * 10,
      };

      const arr = dataRef.current;
      arr.push(next);

      if (arr.length > maxPoints) arr.shift();
      let runningMin = arr[0].value;
      let runningMax = arr[0].value;
      for (let i = 1; i < arr.length; i++) {
        const v = arr[i].value;
        if (v < runningMin) runningMin = v;
        if (v > runningMax) runningMax = v;
      }

      setMin(runningMin);
      setMax(runningMax);
      setData([...arr]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const latest = data[data.length - 1] ?? null;

  return (
    <DataContext.Provider value={{ data, latest, fps, min, max }}>
      {children}
    </DataContext.Provider>
  );
}
