const inventoryShows = [
    {
        itemName: "Calsi",
        profit: 200,
        buyPrice: 600,
        status: "Sold",
        sellingPrice: 800,
        condition: "Good",

    },
    {
        itemName: "Calsi",
        profit: 200,
        buyPrice: 600,
        status: "Sold",
        sellingPrice: 800,
        condition: "Good",

    },
]

const Inventory = () => {
  return (
    <div>
        <div className=" flex gap-4 flex-col">
            {inventoryShows.map((item) => (
                <div className="flex items-center gap-4 border rounded-lg p-3 font-semibold">
                    <p>{item.itemName}</p>
                    <p>{item.profit}</p>
                    <p>{item.buyPrice}</p>
                    <p>{item.status}</p>
                    <p>{item.sellingPrice}</p>
                    <p>{item.condition}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600">Edit Price</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Inventory