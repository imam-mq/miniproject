import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-red-700 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Kolom 1: Logo dan Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HealthCare</h2>
          <p className="mb-4 leading-relaxed">
            Tetap jaga kesehatan jantung <br />
            melalui gaya hidup dan <br />
            konsultasi tepat
          </p>
          <div className="flex items-center gap-2 mb-2">
            <span>📧</span>
            <a href="mailto:infojantung@gmail.com" className="hover:underline">
              infojantung@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href="tel:081338271098" className="hover:underline">
              081338271098
            </a>
          </div>
        </div>

        {/* Kolom 2: Menu */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Beranda</a></li>
            <li><a href="#" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#" className="hover:underline">Faktor Resiko</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Kolom 3: Sosial Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl text-white hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl text-white hover:text-gray-200">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>
    </section>

  );
}

export default Footer;
