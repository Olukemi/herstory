export default function Timeline({ events }) {
    return (
      <div className="mt-6">
        {events.length === 0 && <p>No events yet. Add your first one!</p>}
        <ul className="flex flex-col gap-4">
          {events.map((event, index) => (
            <li key={index} className="border p-4 rounded">
              <h2 className="font-bold">{event.date} - {event.name}</h2>
              <h3 className="font-bold">{event.location || "Unknown location"}</h3>
              <p>{event.description}</p>
              {event.image && <img src={event.image} alt={event.name} className="mt-2 w-48 rounded" />}
              {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer">Link</a>}
            </li>
          ))}
        </ul>
      </div>
    );
  }