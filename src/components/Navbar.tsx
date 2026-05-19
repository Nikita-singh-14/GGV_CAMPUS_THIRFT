import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <img
                    src="/logo.jpeg"
                    alt="logo"
                    className="w-12 h-12 rounded-full object-cover"
                />

                <h1 className="text-2xl font-bold text-blue-600">
                    GGV_CAMPUS_THRIFT
                </h1>
            </div>

            {/* Nav Links */}
            <ul className="hidden md:flex items-center gap-16 text-gray-700 font-medium">

        <Link to="/how-it-works">
          <li className="hover:text-blue-600 cursor-pointer">
            How It Works
          </li>
        </Link>

        <Link to="/browse-items">
          <li className="hover:text-blue-600 cursor-pointer">
            Browse Items
          </li>
        </Link>

        <Link to="/sell">
          <li className="hover:text-blue-600 cursor-pointer">
            Sell
          </li>
        </Link>

      </ul>

            {/* Buttons */}
            <div className="flex items-center gap-4">

                <Link to="/login">
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                        Login
                    </button>
                </Link>

                <Link to="/signup">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Sign Up
                    </button>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;