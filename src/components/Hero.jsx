import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center max-w-3xl mt-24"
    >
      <h1 className="text-6xl font-extrabold mb-6">
        🎄 Christmas Wishes 🎄
      </h1>
      <p className="text-xl text-white/90">
        A little surprise made with love just for you.
      </p>
    </motion.section>
  );
}
