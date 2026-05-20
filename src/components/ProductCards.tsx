import React from "react";

type ProductCardProps = {
  icon: string;
  title: string;
  category: string;
  price: string;
  condition: string;
};

const ProductCard = ({
  icon,
  title,
  category,
  price,
  condition,
}: ProductCardProps) => {
  return (
    <div className="px-4 w-92 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
      {/* Top Icon Section */}
      <div className="bg-white text-black h-32 flex items-center justify-center text-5xl">
        {icon}
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h2 className="text-white text-xl font-bold">
          {title}
        </h2>

        {/* Category */}
        <p className="text-gray-400 text-sm mt-1">
          {category}
        </p>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-4">

          {/* Price */}
          <h3 className="text-blue-400 text-2xl font-bold">
            ₹{price}
          </h3>

          {/* Condition */}
          <span className="bg-green-900 text-green-400 text-sm px-3 py-1 rounded-full">
            {condition}
          </span>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;