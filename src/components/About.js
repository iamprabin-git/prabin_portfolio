"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/assets/me.png"; // Update with your actual image
import Link from "next/link";

export default function AboutSection() {
  const services = [
    { title: "Web Development", description: "Responsive websites with performance and design in mind." },
    { title: "Graphic Design", description: "Creative logos, posters, and visual branding assets." },
    { title: "UI/UX Design", description: "Intuitive and modern interfaces for web and mobile apps." },
  ];

  const timeline = [
    { year: "2024", role: "Frontend Developer", company: "Freelance", desc: "Built websites for local clients using Next.js & Tailwind." },
    { year: "2023", role: "Graphic Designer", company: "Creative Studio", desc: "Designed brand identities and print-ready marketing materials." },
  ];

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
            Hello! I&apos;m a passionate <span className="text-amber-500 font-semibold">Web Developer</span> and{" "}
            <span className="text-amber-500 font-semibold">Graphic Designer</span> with a focus on modern, user-friendly designs.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            My goal is to bridge design and functionality, bringing digital visions to life through responsive development and compelling visuals.
          </p>

          <Link
            href="#" // Replace with your actual file
            download
            className="mt-6 inline-block px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition"
          >
            Download CV
          </Link>
        </motion.div>

        {/* Image */}
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

      {/* Timeline */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Experience</h3>
        <ul className="space-y-4">
          {timeline.map((item, idx) => (
            <li key={idx} className="border-l-4 border-amber-500 pl-4">
              <p className="text-sm text-gray-500">{item.year}</p>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{item.role} @ {item.company}</h4>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md"
          >
            <h4 className="text-xl font-semibold text-amber-500 mb-2">{service.title}</h4>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
