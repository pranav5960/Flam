# Real-Time Performance Dashboard

A **high-performance real-time dashboard** built with **Next.js 14+ (App Router)** and **TypeScript**.  
It visualizes **10,000+ data points** across multiple chart types (**Line, Bar, Scatter, Heatmap**) at **60fps** with smooth, responsive interactions.

---

## 🚀 Features

### Charts
- **LineChart** – Real-time streaming line graph
- **BarChart** – Downsampled bar visualization
- **ScatterPlot** – Interactive scatter points
- **Heatmap** – Real-time heat mapping

### Controls
- **FilterPanel** – Adjust visible points dynamically
- **TimeRangeSelector** – Select different time ranges

### Data Table
- Virtualized scrolling for large datasets
- Displays timestamp and value

### Performance Monitor
- Real-time **FPS counter**
- **Memory usage** display
- **Stress test mode**

---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone <your-repo-url>
cd performance-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

## ⚡ Performance Testing

The dashboard includes a **Performance Monitor** showing:

- **FPS**
- **Memory usage**

### Stress-Test the Dashboard:

1. Increase the number of visible points using the **FilterPanel**.
2. Observe **FPS drops** or **memory spikes**.

### Benchmarks Achieved:

| Data Points | FPS   | Memory Growth       | Interaction Latency |
|-------------|-------|---------------------|---------------------|
| 10,000+     | 60fps | < 1MB per hour      | < 100ms             |

### Tools Used for Profiling:

- Chrome DevTools Profiler
- React DevTools

---

## 🌐 Browser Compatibility

| Browser         | Status |
|-----------------|--------|
| Chrome (latest) | ✅     |
| Firefox         | ✅     |
| Edge            | ✅     |
| Safari          | ✅     |

**Responsive design** works on:

- **Desktop**
- **Tablet**
- **Mobile devices**

---

## 🖼️ Screenshots / GIFs

*(Add images of charts updating, FPS counter, and data table scroll)*

<img src="screenshots/line-chart.gif" alt="Line Chart Streaming" width="400" />
<img src="screenshots perf-monitor.png" alt="Performance Monitor" width="400" />
<img src="screenshots/table-scroll.gif" alt="Virtualized Table Scroll" width="400" />

---

## ⚙️ Next.js Specific Optimizations

- **App Router** used exclusively (no Pages Router)

### Server Components
- `DashboardPage` fetches initial dataset

### Client Components
- Charts, controls, `DataProvider`

### Streaming & Suspense
- Progressive loading where applicable

---

## ⚡ React Performance Patterns

```ts
useMemo       → for derived calculations
useCallback   → for stable function references
React.memo    → for expensive components
useTransition → for non-blocking updates
