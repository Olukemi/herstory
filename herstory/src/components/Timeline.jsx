export default function Timeline({ events, deleteEvent }) {
  return (
    <div className="mt-6">
      {events.length === 0 && <p>No events yet. Add your first one!</p>}

      <div className="flex justify-center items-center min-h-screen">
        <ul className="flex flex-row gap-16 overflow-x-auto px-6 py-4 no-scrollbar">
          {events.map((event, index) => (
            <li
              key={index}
              className="relative w-80 h-80 flex-shrink-0 flex items-center justify-center"
            >
             <svg
                viewBox="0 0 300 150"
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120%] h-32 overflow-visible"
              >
                <defs>
                  {/* Top half arc */}
                  <path
                    id={`curve-${index}`}
                    d="M 20,140 A 130,130 0 0,1 230,100"
                    fill="transparent"
                  />
                </defs>

                <text fontSize="14" className="fill-black lowercase tracking-wide">
                  <textPath
                    href={`#curve-${index}`}
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {event.name} | {event.date} | {event.location}
                  </textPath>
                </text>
              </svg>

              {/* Card itself */}
              <div className="relative border p-4 rounded-full shadow-lg w-100 h-56 bg-white flex flex-col items-center justify-center">
                <button
                  onClick={() => deleteEvent(index)}
                  className="absolute top-3 right-3 hover:text-red-700 text-xl"
                >
                  <i className="ri-delete-bin-5-line"></i>
                </button>

                {event.image && (
                  <img
                    src={event.image}
                    className="w-28 h-28 object-cover rounded-full mb-2"
                  />
                )}

                {event.description && (
                  <p className="text-sm text-center">{event.description}</p>
                )}

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 left-3 text-white bg-black rounded-full hover:bg-gray-800 px-2 py-1 text-sm"
                  >
                    <i className="ri-links-line"></i>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
