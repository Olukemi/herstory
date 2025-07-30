import { useState } from 'react'
import './App.css'
import Event from './components/Event';
import Timeline from './components/Timeline';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  }

  const exportCSV = () => {
    const csv = Papa.unparse(events);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "herstory.csv");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600">Herstory 📖</h1>
      <p className="mb-4">Track the significant moments in your life.</p>
      <Event addEvent={addEvent} />
      <button onClick={exportCSV} className="mt-4 bg-purple-500 text-white p-2 rounded">
        Export to CSV
      </button>
      <Timeline events={events} />
    </div>
  );
}

export default App
