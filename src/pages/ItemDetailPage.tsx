// import { useState } from "react";
import StoreNavbar from "../components/StoreNavbar";
import StoreCard from "../components/StoreCard";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { items } from "../data/items";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const categories = [
  "All",
  "Textbooks",
  "Electronics",
  "Dorm items",
  "Bikes",
  "Clothes",
  "Sports",
];

const ItemDetailPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { id } = useParams();

  const item = items.find((i) => i.id === Number(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <>
      <StoreNavbar />

      <main className="flex flex-col gap-6 justify-center">

        {/* Categories */}
        <div className="flex gap-2 px-5 py-3 border-b border-gray-100 overflow-x-auto items-center justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors
              ${activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="px-5 py-3 flex justify-center items-center">
          <p className="text-sm text-gray-400 flex items-center gap-2">

            <span className="font-medium text-gray-800 cursor-pointer"
            onClick={() => navigate("/store")}>
              <FaArrowLeft />
            </span>

            <span>Store</span>

            <FaChevronRight className="text-xs" />

            <span>{item?.category}</span>

            <FaChevronRight className="text-xs" />

            <span>{item?.name}</span>
          </p>
        </div>

        {/* Products */}
        <div className="flex flex-wrap gap-12 p-6 justify-center">
          <div className="w-68 h-68">
            <img src={item?.image} alt="" />
          </div>

          <div className="flex flex-col gap-5">
            <h2>{item?.name}</h2>
            <p>{item?.desc}</p>
            <span>{item?.buyPrice}</span>
            <div className="flex flex-col gap-4 rounded-2xl bg-gray-200 p-6 [&>div]:flex [&>div]:justify-between">
              <p>Item specs</p>
              <div>
                <p>Condition</p>
                <p><b>{item?.condition}</b></p>
              </div>
              <div>
                <p>Category</p>
                <p>{item?.category}</p>
              </div>
              <div>
                <p>Verified by:</p>
                <p>GGV_CAMPUS_THIRFT</p>
              </div>
              <div>
                <p>Availability</p>
                <p>{item?.status}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg cursor-pointer"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg cursor-pointer"
              
            >
              Save To Wishlist
            </button>
            </div>
            <div className="flex [&>div]:flex [&>div]:items-center [&>div]:gap-1 text-blue-600 text-xs gap-2">
              <div ><CiDeliveryTruck />Campus Delivery</div>
              <div><AiOutlineLoading3Quarters />48hr return</div>
              <div><VscWorkspaceTrusted />Verified item</div>
            </div>


          </div>
        </div>
      </main>
    </>
  );
};

export default ItemDetailPage;