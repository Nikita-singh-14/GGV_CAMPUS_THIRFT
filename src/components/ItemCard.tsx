import React from "react";

type CardProps = {
  logo: string;
  title: string;
  description: string;
};

const Card = ({ logo, title, description }: CardProps) => {
  return (
    <div className="px-4 w-72 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
       {/*} className="w-72 bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"

      {/* Logo */}
      <img
        src={logo}
        alt={title}
        className="w-16 h-16 object-cover rounded-full mb-4"
      />

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 text-sm">
        {description}
      </p>
    </div>
  );
};

export default Card;