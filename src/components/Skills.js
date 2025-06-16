'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Graphic Design', percentage: 60 },
  { name: 'MERN Stack', percentage: 75 },
  { name: 'UI/UX Design', percentage: 80 },
  { name: 'Adobe Photoshop', percentage: 65 },
  { name: 'HTML/CSS/JS', percentage: 90 },
];

export default function SkillsSection() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Skills
        </h2>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                <span className="text-sm font-semibold text-amber-500">{skill.percentage}%</span>
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="h-4 bg-amber-500 rounded-full shadow-md"
              />
              
              <div className="h-1 w-full bg-gray-300 dark:bg-gray-700 rounded-full mt-[-1rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
