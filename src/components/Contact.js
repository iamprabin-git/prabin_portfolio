'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Optionally do something with the form data here

    // 2. Reset the form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // 3. Remove search params from URL
    router.replace('/');
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & WhatsApp */}
        <div className="flex flex-col justify-center text-gray-800 dark:text-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6 border border-gray-300 dark:border-gray-700 rounded-md p-4">
            Feel free to reach out via email, phone, or WhatsApp for any inquiries or projects!
          </p>
          <p className="mb-3 flex gap-4">
           <MdEmail className='h-5 w-5'/>  <Link href="mailto:youremail@example.com" className="hover:text-blue-700 cursor-pointer">dprabin23@gmail.com</Link>
          </p>
          <p className="mb-3 flex gap-4">
           <FaPhone className='h-5 w-5'/><Link href="tel:+9779812345678" className="hover:text-blue-700 cursor-pointer">+977 9765726294</Link>
          </p>
          <p className="mb-3 flex gap-4">
           <FaFacebookSquare className='h-5 w-5'/><Link href="https://www.facebook.com/share/15zZKoSGRd/" className="hover:text-blue-700 cursor-pointer">prabin dangol</Link>
          </p>
           <p className="mb-3 flex gap-4">
           <FaLinkedin className='h-5 w-5'/><Link href="https://www.linkedin.com/in/prabin-dangol-0b4287a0" className="hover:text-blue-700 cursor-pointer">prabin dangol</Link>
          </p>
           <p className="mb-3 flex gap-4">
           <GrInstagram className='h-5 w-5'/><Link href="https://www.instagram.com/dprabin23?igsh=ZzUzN3FjZTB6emV3" className="hover:text-blue-700 cursor-pointer">dprabin23</Link>
          </p>
          <p className="mb-3 flex gap-4">
           <FaGithub className='h-5 w-5'/><Link href="https://github.com/iamprabin-git" className="hover:text-blue-700 cursor-pointer">iamprabin-git</Link>
          </p>
        

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/9779765726294?text=${encodeURIComponent(
              "Hello! I'm interested in your services."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition w-max"
          >
            Message me on WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
}
