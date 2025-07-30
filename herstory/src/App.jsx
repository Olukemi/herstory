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

  const importCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        const importedEvents = result.data.map((row) => ({
          date: row.date,
          name: row.name,
          description: row.description,
          location: row.location,
          image: row.image,
          link: row.link,
        }));
        const merged = [...events, ...importedEvents].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setEvents(merged);
      },
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600">🌸 HerStory Timeline 📖</h1>
      <p className="mb-4">Track the significant moments in your life.</p>
      <Event addEvent={addEvent} />
      <button onClick={exportCSV} className="mt-4 bg-purple-500 text-white p-2 rounded">
        Export to CSV
      </button>
      <label className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer">
          Upload CSV
          <input
            type="file"
            accept=".csv"
            onChange={importCSV}
            className="hidden"
          />
        </label>
      <Timeline events={events} />
    </div>
  );
}

export default App
