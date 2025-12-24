export default function Snow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={i}
          className="absolute -top-4 w-2 h-2 bg-white rounded-full opacity-80 animate-snow"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 5 + Math.random() * 10 + "s",
            animationDelay: Math.random() * 5 + "s",
          }}
        />
      ))}
    </div>
  );
}
