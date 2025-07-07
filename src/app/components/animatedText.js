"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  "Individuals",
  "Freelancers",
  "Startups",
  "Corporations",
  "Professionals",
  "Consultants",
  "Expats",
  "Investors",
  "Entrepreneurs",
  "Businesses",
];

const fadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-2xl md:text-5xl font-semibold mr-28 text-white">
      <span className="inline-block mb-10 ml-2  min-w-[150px] text-white relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="absolute left-0 top-0"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h2>
  );
};

export default AnimatedText;
