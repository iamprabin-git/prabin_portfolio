'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '@/assets/me.png'; // Replace with your actual image

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Area */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Hello! I'm a <span className="text-amber-500 font-semibold">Web Developer</span> and{" "}
            <span className="text-amber-500 font-semibold">Graphic Designer</span> with a passion for
            building creative, user-friendly digital experiences.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            With a strong foundation in front-end development and visual storytelling,
            I bridge the gap between functionality and aesthetics. I love transforming ideas into intuitive, beautiful designs.
          </p>
        </motion.div>

        {/* Image Area */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full max-w-sm mx-auto"
        >
          <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
