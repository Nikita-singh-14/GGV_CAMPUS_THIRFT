// import { useState } from "react";
import StoreNavbar from "../components/StoreNavbar";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import { items } from "../data/items";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

// const categories = [
//   "All",
//   "Textbooks",
//   "Electronics",
//   "Dorm items",
//   "Bikes",
//   "Clothes",
//   "Sports",
// ];

const CartPage = () => {
  // const [activeCategory, setActiveCategory] = useState("All");
  const { id } = useParams();

  const item = items.find((i) => i.id === Number(id));
  // const { addToCart } = useCart();
  const navigate = useNavigate();
  const {cartCount} = useCart();

  // const filteredItems =
  //   activeCategory === "All"
  //     ? items
  //     : items.filter((i) => i.category === activeCategory);

  return (
    <>
      <StoreNavbar />

      <main className="flex flex-col gap-6 justify-center items-center mt-5">

        {/* Categories
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
        </div> */}

        {/* Breadcrumb */}
        <div className="px-5 py-3 flex justify-between items-center w-[45%]">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <span className="font-medium text-gray-800 cursor-pointer"
            onClick={() => navigate("/store")}>
              <FaArrowLeft />
            </span>
            <span>Back to store</span>
            <p>|</p>
            <span className="text-black"><b>Your Cart</b></span>
          </p>
          <button className="mt-1 px-4 py-1 bg-gray-500 text-white rounded-3xl cursor-pointer">{cartCount} Items</button>
        </div>

        {/* Products */}
        <div className="flex gap-5">
        <div className="flex flex-col gap-3 bg-gray-300 p-5 rounded-2xl">
          <p>Cart Items</p>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 bg-gray-300 p-5 rounded-2xl">
            <p>Order Summary</p>
            <hr />
            <div>
              <p>{item?.name}</p>
              <span><b>{item?.buyPrice}</b></span>
            </div>
            <hr />
            <div>
              <p><b>Total</b></p>
              <p>sum</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-gray-300 p-5 rounded-2xl">
            <p>Delivery details</p>
            <hr />
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Your name</label>
                <input className="border rounded-t-sm cursor-pointer p-2" type="text" placeholder="Full name" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Phone number</label>
                <input className="border rounded-t-sm cursor-pointer p-2" type="text" placeholder="10-digit number" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Hostel/room no.</label>
                <input className="border rounded-t-sm cursor-pointer p-2" type="text" placeholder="e.g. Block c, Room 206" />
              </div>
              <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg cursor-pointer"
            >
              Place order sum
            </button>
            <p>Campus delivery . no extra charges</p>
              
            </form>
          </div>
        </div>  
        </div> 
      </main>
    </>
  );
};

export default CartPage;