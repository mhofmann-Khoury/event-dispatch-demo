import { useState } from 'react';
import { Gallery } from './Gallery';
import './app.css';

export function App() {
  const [log, setLog] = useState<string[]>([]);

  const addLog = (entry: string) => {
    setLog((prev) => [...prev, entry].slice(-12)); // keep last 12 lines
  };
  const clearLog = () => {
    setLog([]);
  };

  return (
    <div className="app">
      <h1>Capture → Target → Bubble: Gallery Demo</h1>

      <Gallery onLog={addLog} clearLog={clearLog} />

      <h3 className="event-log-heading">Event log For Latest Click</h3>
      <div className="event-log">
        {log.length === 0
          ? '// click a cat or its Disable button to see the dispatch order'
          : log.join('\n')}
      </div>
    </div>
  );
}
