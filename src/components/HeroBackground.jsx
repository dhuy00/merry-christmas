import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1543589077-47d81606c1bf"
        className="w-full h-full object-cover"
        alt="Christmas Night"
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 w-full text-center"
      >
        <h1 className="text-7xl md:text-8xl font-christmas text-red-200 glow">
          Merry Christmas
        </h1>
        <p className="mt-6 text-3xl font-script text-white">
          Wishing you warmth & joy ✨
        </p>
      </motion.div>
    </div>
  );
}
