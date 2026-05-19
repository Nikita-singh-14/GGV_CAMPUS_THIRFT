import React from 'react'

const Overview = () => {
  return (
    <div className="bg-white text-black py-10 px-6">

      {/* Top Line */}
      <div className="w-full h-[2px] bg-gray-300 mb-8 animate-pulse"></div>

      {/* Stats Section */}
      <div className="w-full flex flex-wrap items-center justify-between text-center gap-8">

        {/* Stat 1 */}
        <div className="flex-1 min-w-[150px] hover:scale-105 transition duration-300">
          <h1 className="text-4xl font-bold">240+</h1>
          <p className="text-gray-400 mt-2">Items sold</p>
        </div>

        {/* Stat 2 */}
        <div className="flex-1 min-w-[150px] hover:scale-105 transition duration-300">
          <h1 className="text-4xl font-bold">₹4.2L</h1>
          <p className="text-gray-400 mt-2">Saved by students</p>
        </div>

        {/* Stat 3 */}
        <div className="flex-1 min-w-[150px] hover:scale-105 transition duration-300">
          <h1 className="text-4xl font-bold">3 days</h1>
          <p className="text-gray-400 mt-2">Avg. sell time</p>
        </div>

        {/* Stat 4 */}
        <div className="flex-1 min-w-[150px] hover:scale-105 transition duration-300">
          <h1 className="text-4xl font-bold">100%</h1>
          <p className="text-gray-400 mt-2">Verified listings</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="w-full h-[2px] bg-gray-300 mt-8 animate-pulse"></div>

    </div>
  )
}

export default Overview