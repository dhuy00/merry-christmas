import snowFlake from '../assets/snow_flake.svg'

export default function SnowFlake() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => {
        const size = 8 + Math.random() * 15; 

        return (
          <img
            key={i}
            src={snowFlake}
            alt=""
            className="absolute -top-12 opacity-80 animate-snow"
            style={{
              left: Math.random() * 100 + "%",
              width: size + "px",
              height: size + "px",
              animationDuration: 5 + Math.random() * 10 + "s",
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        );
      })}
    </div>
  );
}
