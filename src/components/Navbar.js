'use client';
import React, { useState, useEffect } from 'react';
import navlinks from '../constants/navlinks';
import { FiMenu} from 'react-icons/fi';
import { FiX } from "react-icons/fi";
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Prabin Dangol</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-gray-800 dark:text-white">
          {navlinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-amber-500 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger icon for mobile */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-2xl text-gray-800 dark:text-white">
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-gray-600 dark:text-gray-300">
          <FiX />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-6 text-gray-800 dark:text-white">
          {navlinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-amber-500"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay when drawer is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
