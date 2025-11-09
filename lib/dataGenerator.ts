export interface DataPoint {
  timestamp: number;
  value: number;
}

export async function generateInitialDataset(
  count = 1000
): Promise<DataPoint[]> {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => ({
    timestamp: now - (count - i) * 1000,
    value: Math.sin(i / 50) * 50 + 100 + Math.random() * 10,
  }));
}
