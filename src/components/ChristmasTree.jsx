import { motion } from "framer-motion";

export default function ChristmasTree() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center z-10 mt-64"
    >
      <img
        src="https://i.imgur.com/WK9xR6T.png"
        alt="Christmas Tree"
        className="w-72 animate-float"
      />

      <div className="mt-10 text-center max-w-xl">
        <p className="font-script text-3xl text-white leading-relaxed">
          May this Christmas bring you peace, love and unforgettable moments.
        </p>
        <p className="mt-4 font-christmas text-xl text-red-200">
          🎁 With love from Gun
        </p>
      </div>
    </motion.div>
  );
}
