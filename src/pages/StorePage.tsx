import { useState } from 'react'
import StoreNavbar from '../components/StoreNavbar'
import { items } from '../data/items'
import StoreCard from '../components/StoreCard'

const categories = [
  "All",
  "Textbooks",
  "Electronics",
  "Dorm items",
  "Bikes",
  "Clothes",
  "Sports",
]

const StorePage = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredItems = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory)
  return (
    <>
      <StoreNavbar />

      <main className='flex flex-col gap-6 justify-center '>
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

        <div className="px-5 py-3 flex justify-evenly items-center">
          <p className="text-sm text-gray-400">
            <span className="font-medium text-gray-800">{filteredItems.length} items</span> available
          </p>
          <div className='flex gap-5'>
            <label className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
             <select
      className="
        px-4 
        py-2 
        border 
        border-gray-300 
        rounded-lg 
        text-sm 
        outline-none 
        bg-white
        focus:ring-2 
        focus:ring-black
        cursor-pointer
      "
    >
      <option>Newest</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
          </div>
        </div>


        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {filteredItems.map((item) => (
            <StoreCard
              key={item.id}
              name={item.name}
              category={item.category}
              condition={item.condition}
              buyPrice={item.buyPrice}
              status={item.status}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-3xl mb-2">🔎</p>
            <p className="text-sm">No items in this category yet.</p>
          </div>
        )}
      </main>


    </>
  )
}

export default StorePage