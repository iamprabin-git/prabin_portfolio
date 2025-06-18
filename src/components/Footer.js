"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "@/assets/prabin-logo.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className=" bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Logo and Info */}
        <div>
          <div className="grid grid-cols-2">
         
          <Image
                    src={logo}
                    alt="Prabin Dangol"
                    width={500}
                    height={500}
                    className="w-15 h-15 object-cover"
                  />
                   <h1 className="text-2xl font-semibold mb-3">Prabin Dangol</h1>
                  </div>
          <p className="text-gray-900 dark:text-white mt-3">
            Creative Web Developer & Graphic Designer building clean and modern user experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <Link href="#about" className="text-gray-900 hover:text-amber-500 transition dark:text-white">About</Link>
          <Link href="#projects" className="text-gray-900 hover:text-amber-500 transition dark:text-white">Projects</Link>
          <Link href="#skills" className="text-gray-900 hover:text-amber-500 transition dark:text-white">Skills</Link>
          <Link href="#contact" className="text-gray-900 hover:text-amber-500 transition dark:text-white">Contact</Link>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Contact</h4>
          <p className="mb-3 flex gap-4">
           <MdEmail className='h-5 w-5'/>  <Link href="mailto:youremail@example.com" className="hover:text-blue-700 cursor-pointer">dprabin23@gmail.com</Link>
          </p>
          <p className="mb-3 flex gap-4">
           <FaPhone className='h-5 w-5'/><Link href="tel:+9779812345678" className="hover:text-blue-700 cursor-pointer">+977 9765726294</Link>
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/iamprabin-git" target="_blank" className="text-gray-400 hover:text-amber-500 text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prabin-dangol-0b4287a0" target="_blank" className="text-gray-400 hover:text-amber-500 text-xl">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/15zZKoSGRd/" target="_blank" className="text-gray-400 hover:text-amber-500 text-xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/dprabin23?igsh=ZzUzN3FjZTB6emV3" target="_blank" className="text-gray-400 hover:text-amber-500 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-900 dark:text-white text-sm mt-10">
        © {new Date().getFullYear()} Prabin Dangol. All rights reserved.
      </div>
    </motion.footer>
  );
}
