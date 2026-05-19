import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-6 mt-10">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start gap-3">

          <div className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <h1 className="text-2xl font-bold">
              GGV_CAMPUS_THRIFT
            </h1>
          </div>

          
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 flex-col">
            <div className="flex items-center gap-5 text-2xl ">

          <a href="#" className="hover:text-blue-400 transition">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          </div>
          <p className="text-gray-700 text-sm text-center md:text-left max-w-md">
            Quality-checked secondhand marketplace
          </p>

        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        Made for college students · @ 2025
      </div>
    </footer>
  );
};

export default Footer;