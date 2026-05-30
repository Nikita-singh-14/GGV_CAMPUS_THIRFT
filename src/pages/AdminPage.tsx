import { useState } from "react"
import Submissions from "../components/Submissions"
import Orders from "../components/Orders"
import Inventory from "../components/Inventory"

const AdminTabs = [
  {
    name: "submissions",
    label: "Submissions"
  },
  {
    name: "inventory",
    label: "Inventory"
  },
  {
    name: "orders",
    label: "Orders"
  },
]


const AdminPage = () => {
  const [activeTab, setActiveTabs] = useState("submissions")
  return (
    <div className = "flex flex-col items-center justify-center">
      <div>
        {AdminTabs.map(tab => (
          <button 
          key = {tab.name} 
          className = {`m-3 cursor-pointer border p-3 rounded-2xl ${
              activeTab === tab.name
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          onClick={() => setActiveTabs(tab.name)}
          >{tab.label}</button>
        ))}
      </div>
      <div>
        {activeTab === "submissions" && <Submissions />}
        {activeTab === "inventory" && <Inventory />}
        {activeTab === "orders" && <Orders />}
      </div>
    </div>
  )
}

export default AdminPage;