import Button from "./Button";

const SellForm2 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4">
      
      <h1 className="text-3xl font-bold">Sell your item</h1>

      <p className="text-gray-600 mt-2 text-center">
        We review it and pay you directly. Simple.
      </p>

      {/* Steps */}
      <div className="flex items-center gap-10 mt-6">
        
        <div className="flex items-center gap-3">
          <button className="bg-blue-500 text-white w-8 h-8 rounded-full">
            1
          </button>

          <p className="text-blue-500 font-medium">
            Item details
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 border-t border-gray-400"></div>

          <button className="bg-blue-500 text-white w-8 h-8 rounded-full">
            2
          </button>

          <p className="text-blue-500 font-medium">
            Your info
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="bg-gray-200 flex flex-col p-6 rounded-2xl gap-5 mt-8 w-full max-w-xl shadow-md">

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label>Your Full Name *</label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="border p-3 rounded-lg outline-none bg-white"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label>Phone Number *</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            className="border p-3 rounded-lg outline-none bg-white"
          />
        </div>

        {/* UPI */}
        <div className="flex flex-col gap-2">
          <label>UPI ID for payout *</label>

          <input
            type="text"
            placeholder="example@upi"
            className="border p-3 rounded-lg outline-none bg-white"
          />
        </div>

        {/* Pickup Location */}
        <div className="flex flex-col gap-2">
          <label>Hostel / Pickup Location *</label>

          <input
            type="text"
            placeholder="Enter pickup location"
            className="border p-3 rounded-lg outline-none bg-white"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <Button text="Back" />

          <Button text="Submit for review" />
        </div>

      </form>
    </div>
  );
};

export default SellForm2;