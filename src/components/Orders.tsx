const orderShows = [
    {
        orderId: "1",
        itemName: "Calsi",
        buyerName: "Nikita Singh",
        date: "29-5-2026",
        status: "processing",
        amountPaid: 800,
    },
    {
        orderId: "1",
        itemName: "Calsi",
        buyerName: "Nikita Singh",
        date: "29-5-2026",
        status: "processing",
        amountPaid: 800,
    },
]

const Orders = () => {
  return (
    <div>
        <div className=" flex gap-4 flex-col">
            {orderShows.map((order) => (
                <div className="flex items-center gap-4 border rounded-lg p-3 font-semibold">
                    <p>{order.itemName}</p>
                    <p>{order.buyerName}</p>
                    <p>{order.date}</p>
                    <p>{order.status}</p>
                    <p>{order.amountPaid}</p>
                    <select className="border p-2 rounded-lg outline-none">
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Delivered</option>
                    </select>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Orders;