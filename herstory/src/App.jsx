import { useState } from 'react'
import './App.css'
import Event from './components/Event';
import Timeline from './components/Timeline';
import CTAButton from './components/CTAButton';
import Logo from './components/Logo';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

function App() {
  const [events, setEvents] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const addEvent = (event) => {
    setEvents([...events, event]);
  }

  const deleteEvent = (event) => {
    setEvents(events.filter((_, i) => i !== event));
  }

  const handleAddEvent  = () => {
    setShowAddEvent(true);
  };

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
      <div className="absolute top-4 left-4">
        <Logo />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-2">
        <CTAButton text="add event" onClick={handleAddEvent} bgColor="bg-white" textColor="text-black" outline={true} icon={" + "} />
        <CTAButton text="export as csv" onClick={exportCSV} bgColor="bg-black" textColor="text-white"/>
        <label className="mt-4 bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:shadow-md">
        <i class="ri-upload-cloud-2-line"></i> upload csv
            <input
              type="file"
              accept=".csv"
              onChange={importCSV}
              className="hidden"
            />
          </label>
        </div>
        {showAddEvent && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setShowAddEvent(false)} >
          <div 
            className="bg-transparent" 
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside form
          >
            <Event addEvent={addEvent} setShowAddEvent={setShowAddEvent} />
          </div>
        </div>)}


      <Timeline events={events} deleteEvent={deleteEvent} />
    </div>
  );
}

export default App
