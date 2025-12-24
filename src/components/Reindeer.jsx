import { motion } from "framer-motion";

export default function Reindeer() {
  return (
    <motion.img
      src="https://i.imgur.com/Q9Lg6YB.png"
      alt="Reindeer"
      className="fixed bottom-24 w-56 z-20"
      initial={{ x: "-40%" }}
      animate={{ x: "110%" }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
