export default function GreetingCard({ title, message, icon }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl 
                    hover:scale-105 transition-transform duration-300">
      <div className="text-4xl mb-4 animate-float">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-red-200">{title}</h3>
      <p className="text-white/90">{message}</p>
    </div>
  );
}
