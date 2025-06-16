'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import heroImage from "@/assets/me1.png"; // change if needed
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

         {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <Image
            src={heroImage}
            alt="Prabin Dangol"
            width={1000}
            height={1000}
            className="w-full h-100 object-contain "
            priority
          />
        </motion.div>
        
        {/* Left - Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Prabin
          </h1>

          <TypeAnimation
            sequence={[
              "Web Developer", 2000,
              "Graphic Designer", 2000,
              "UI/UX Enthusiast", 2000,
              "Brand Identity Creator", 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-amber-500"
          />

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            I create beautiful and functional web applications with intuitive designs.
          </p>

          <Link
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition"
          >
            Let’s Work Together
          </Link>
        </motion.div>

       
      </div>
    </section>
  );
}
