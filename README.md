# Real-Time Performance Dashboard
A High-Performance Data Visualization App
Visualizes 10,000+ data points at 60 FPS with Line, Bar, Scatter, and Heatmap charts
Built with Next.js 14+ (App Router) & TypeScript

## Features

| Chart Type   | Description                                      |
|--------------|--------------------------------------------------|
| LineChart    | Real-time streaming line graph with smooth updates |
| BarChart     | Downsampled, high-density bar visualization      |
| ScatterPlot  | Interactive, performant scatter points           |
| Heatmap      | Dynamic real-time heat mapping                   |
## Controls

FilterPanel – Dynamically adjust visible data points

TimeRangeSelector – Select custom time ranges (1m, 5m, 1h, etc.)


## Data Table

Virtualized scrolling for 100K+ rows

Displays timestamp and value

Smooth performance even with large datasets


## Performance Monitor (Real-Time Stats)

FPS Counter
Memory Usage 



# Setup Instructions
### Clone the repository
git clone https://github.com/pranav5960/Flam



cd performance-dashboard

# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build
npm start

## Performance Testing
The dashboard includes a built-in Performance Monitor displaying:
FPS (Frames Per Second)
Memory Usage (MB)



## Tools Used for Profiling

Chrome DevTools Performance Profiler
React DevTools



## Browser Compatibility







BrowserStatusChrome (latest),
Firefox,
Edge,
Safari.




## Next.js Optimizations (App Router)

### Server Components
→ DashboardPage fetches initial dataset server-side
### Client Components
→ Charts, controls, and DataProvider
### Streaming & Suspense
→ Progressive loading for large datasets




# Deployed link :
https://flam-plum.vercel.app/
