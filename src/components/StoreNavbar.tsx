import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const StoreNavbar = () => {
    const cartCount = 3;

    return (
        <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">

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

            <div className="relative w-120">
                <input
                    type="text"
                    placeholder="Search items..."
                    className="
      w-full
      h-11
      pl-10
      pr-4
      text-sm
      border
      border-gray-300
      rounded-full
      outline-none
      focus:ring-2
      focus:ring-blue-400
      shadow-md
      transition-all
    "
                />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <div className="flex items-center gap-4">

                <Link
                    to="/add-to-cart"
                    className="relative flex items-center justify-center w-12 h-12 bg-white  rounded-full hover:bg-gray-100 transition"
                >
                    {/* Cart Icon */}
                    <FaShoppingCart className="text-2xl text-black" />

                    {/* Badge */}
                    <span
                        className="
      absolute 
      -top-1 
      -right-1 
      bg-red-500 
      text-white 
      text-xs 
      font-bold 
      w-5 
      h-5 
      flex 
      items-center 
      justify-center 
      rounded-full
    "
                    >
                        {cartCount}
                    </span>
                </Link>

                <Link to="/user-profile" className="relative flex items-center justify-center w-12 h-12   rounded-full hover:bg-gray-100 transition">
                    <FaUserCircle className='text-2xl'/>

                </Link>

            </div>
        </nav>
    )
}

export default StoreNavbar