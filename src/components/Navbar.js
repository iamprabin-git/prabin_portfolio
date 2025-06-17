'use client';
import React, { useState, useEffect } from 'react';
import navlinks from '../constants/navlinks';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50 bg-white dark:bg-black">
      <h1 className="text-xl font-bold">Prabin Dangol</h1>
      <ul className="flex gap-6">
        {navlinks.map(link => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-amber-500 transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;