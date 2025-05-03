import React, { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  // Cek scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuActive = show ? 'left-0' : '-left-full';

  return (
    <div
      className={`navbar fixed w-full z-50 transition-all duration-300 ${
        scroll ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <HeartIcon className="h-6 w-6 text-red-600" />
          <div>
            <h1 className="text-lg font-bold text-red-600">HealthCare</h1>
            <p className="text-sm text-gray-500 -mt-1">Website For Health</p>
          </div>
        </div>

        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row md:static md:bg-transparent md:shadow-none md:translate-y-0 
          md:p-0 md:m-0 gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 px-8 py-6 rounded shadow-lg shadow-slate-300 
          bg-red-500 font-bold text-black transition-all duration-300 md:items-center`}
        >
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/tentang-kami">Tentang Kami</Link></li>
          <li><Link to="/faktor-resiko">Faktor Resiko</Link></li>
        </ul>

        {/* Konsultasi Button */}
        <div className="social flex items-center gap-2">
          <a href="#" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">Konsultasi</a>
        </div>

        {/* Hamburger Icon */}
        <i
          className="ri-menu-3-line text-3xl md:hidden block cursor-pointer"
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
