import { useState } from "react";

export default function Timeline({ events, deleteEvent }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === events.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mt-6">
      {events.length === 0 && <p>No events yet. Add your first one!</p>}

      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Carousel container */}
        <div className="relative w-full max-w-4xl overflow-hidden pb-12">
          {/* Inner track */}
          <ul
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {events.map((event, index) => (
              <li
                key={index}
                className="w-full flex-shrink-0 flex justify-center items-center overflow-visible"
              >
                <div className="relative w-[28rem] h-[28rem] flex items-center justify-center overflow-visible">
                  {/* Curved text */}
                  <svg
                    viewBox="0 0 200 100"
                    className="absolute -top-20 left-1/2 -translate-x-1/2 w-[28rem] h-32 overflow-visible pointer-events-none"
                  >
                    <defs>
                      <path
                        id={`curve-${index}`}
                        d="M 0,100 A 100,100 0 0,1 200,100"
                        fill="transparent"
                      />
                    </defs>
                    <text
                      fontSize="20"
                      className="fill-white font-semibold lowercase tracking-wide"
                    >
                      <textPath
                        xlinkHref={`#curve-${index}`}
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        {event.name} | {event.date} | {event.location}
                      </textPath>
                    </text>
                  </svg>

                  {/* Card */}
                  <div className="relative w-[28rem] h-[28rem] rounded-full shadow-xl bg-white flex flex-col items-center justify-center border overflow-visible">
                    {/* Delete button */}
                    <button
                      onClick={() => deleteEvent(index)}
                      className="absolute top-4 right-4 hover:text-red-600 text-2xl"
                    >
                      <i className="ri-delete-bin-5-line"></i>
                    </button>

                    {/* Event image */}
                    {event.image && (
                      <img
                        src={event.image}
                        className="w-[24rem] h-[24rem] object-cover rounded-full"
                      />
                    )}

                    {/* Optional description */}
                    {event.description && (
                      <p className="absolute bottom-16 px-3 text-base text-center bg-white/70 rounded-md">
                        {event.description}
                      </p>
                    )}

                    {/* Link button */}
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-10 left-12 text-white bg-black rounded-full hover:bg-gray-800 px-3 py-2"
                      >
                        <i className="ri-links-line"></i>
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination controls */}
        <div className="flex gap-6 mt-6 items-center">
        <button
            onClick={handlePrev}
            className="px-2 py-1 bg-black text-white rounded-full hover:bg-gray-800 text-xl"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <p className="text-lg font-medium">
            {currentIndex + 1}/{events.length}
          </p>
          <button
            onClick={handleNext}
            className="px-2 py-1 bg-black text-white rounded-full hover:bg-gray-800 text-xl"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
