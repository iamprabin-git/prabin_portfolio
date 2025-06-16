'use client';
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="py-12 px-4 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        I'm a web developer & graphic designer passionate about crafting modern, elegant web experiences.
      </p>
    </motion.section>
  );
}

export default AboutSection;
