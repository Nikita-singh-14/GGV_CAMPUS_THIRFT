import { useNavigate } from "react-router-dom";
import Button from "./Button";

const SellForm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-bold">Sell your item</h1>

      <p className="text-gray-600 mt-2">
        We review it and pay you directly. Simple.
      </p>

      <div className="flex items-center gap-10 mt-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-blue-500 text-white w-8 h-8 rounded-full"
          >
            1
          </button>
          <p className="text-blue-500 font-medium">Item details</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 border-t border-gray-400"></div>
          <button
            type="button"
            className="bg-gray-300 text-black w-8 h-8 rounded-full"
          >
            2
          </button>
          <p>Your info</p>
        </div>
      </div>

      <form className="bg-gray-200 flex flex-col p-6 rounded-2xl gap-5 mt-8 w-full max-w-xl shadow-md">
        <div className="flex flex-col gap-2">
          <label>Item Name *</label>
          <input
            type="text"
            placeholder="e.g. Calculus textbook, Sony headphones"
            className="border p-3 rounded-lg outline-none"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-1/2">
            <label>Category *</label>

            <select className="border p-3 rounded-lg outline-none">
              <option>Select category</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Clothes</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label>Asking Price (₹) *</label>

            <input
              type="number"
              placeholder="e.g. 300"
              className="border p-3 rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button text="Good" />
          <Button text="Fair" />
          <Button text="Poor" />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>

          <textarea
            placeholder="Edition, accessories included, any damage..."
            className="border p-3 rounded-lg outline-none h-28 resize-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Photo *</label>

          <input
            type="file"
            className="border p-3 rounded-lg bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Your UPI Info *</label>

          <input
            type="text"
            placeholder="e.g. yourUPI@upi"
            className="border p-3 rounded-lg bg-white"
          />
        </div>

        <Button
          text="Next: Your Info"
          onClick={() => navigate("/sell-form-2")}
        />
      </form>
    </div>
  );
};

export default SellForm;