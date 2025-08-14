import herstory from "../assets/herstory_book.png";

export default function () {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <img
        src={herstory}
        alt="event"
        className="absolute w-[60%] h-[60%] object-contain"
      />

      <svg viewBox="0 0 320 240" className="absolute w-full h-full z-0">
        <defs>
          <path
            id="circlePath"
            d="
              M 170, 140
              m -100,0
              a 100,110 0 1,1 200,0
              a 100,110 0 1,1 -200,0
            "
          />
        </defs>

        {/* Text */}
        <text
          fill="black"
          fontSize="60"
          style={{ letterSpacing: "2px" }}
        >
          <textPath
            href="#circlePath"
            startOffset="30%"
            textAnchor="middle"
          >
            HERSTORY
          </textPath>
        </text>
      </svg>
    </div>
  );
}
