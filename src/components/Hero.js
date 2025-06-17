'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '@/assets/me1.png';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-white via-amber-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <div className="relative w-full h-auto max-h-[450px] shadow-xl rounded-xl overflow-hidden">
            <Image
              src={heroImage}
              alt="Prabin Dangol Portrait"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hello, I&apos;m <span className="text-amber-500">Prabin Dangol</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-2"
          >
            <TypeAnimation
              sequence={[
                'Web Developer', 2000,
                'Graphic Designer', 2000,
                'UI/UX Enthusiast', 2000,
                'Brand Identity Creator', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-amber-500"
            />
          </motion.div>

          <p className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300">
            I build elegant, responsive websites and striking visuals that leave a lasting impact. Let&apos;s turn your ideas into reality!
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition duration-300"
            >
              Let&apos;s Collaborate
            </Link>
            <Link
              href="#"
              className="px-6 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-medium rounded-lg transition duration-300"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg
          className="relative block w-full h-24 text-white dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
