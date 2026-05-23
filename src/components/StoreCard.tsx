import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


type storeCartProps = {
    id: number,
    name: string,
    category: string,
    condition: string,
    buyPrice: number,
    status: string,
    image: string,
    desc: string,
}
const StoreCard = ({id, name, category, condition, buyPrice, image} : storeCartProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg cursor-pointer"
        onClick={() => navigate(`/item-detail/${id}`)}
        
      />

      <h2 className="mt-3 text-xl font-semibold">{name}</h2>

      <p className="text-gray-600">{category}</p>
      <div className='flex justify-between'>
        <p className="text-gray-600">₹ {buyPrice}</p>
        <div className='text-green-800'>{condition}</div>
      </div>
      <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg cursor-pointer"
      onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default StoreCard