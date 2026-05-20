// src/data/items.ts

export type ItemCondition = "Good" | "Fair" | "Poor"

export type ItemStatus = "live" | "sold" | "pending"

export type Item = {
  id: number
  name: string
  category: string
  condition: ItemCondition
  buyPrice: number      // what YOU paid the seller
  sellPrice: number     // what YOU charge the buyer
  status: ItemStatus
  image: string         // emoji for now, later a real image URL
  desc: string
}

export const items: Item[] = [
  {
    id: 1,
    name: "Calculus Vol. 2",
    category: "Textbooks",
    condition: "Good",
    buyPrice: 300,
    sellPrice: 480,
    status: "live",
    image: "https://studyupindia.com/wp-content/uploads/2022/06/COMBO-1-SPARSH-SANCHAYAN.png",
    desc: "James Stewart 8th edition. No highlights.",
  },
  {
    id: 2,
    name: "Sony WH-1000XM4",
    category: "Electronics",
    condition: "Good",
    buyPrice: 3500,
    sellPrice: 5200,
    status: "live",
    image: "https://m.media-amazon.com/images/I/712wyKsNmML.jpg",
    desc: "Noise cancelling. Includes case and cable.",
  },
  {
    id: 3,
    name: "Dell Inspiron 15",
    category: "Electronics",
    condition: "Good",
    buyPrice: 15000,
    sellPrice: 19500,
    status: "live",
    image: "https://laptopmedia.com/wp-content/uploads/2022/09/3-20-e1662987253972.jpg",
    desc: "i5, 8GB RAM, 256GB SSD. Battery lasts 4hrs.",
  },
  {
    id: 4,
    name: "Study Desk Lamp",
    category: "Dorm items",
    condition: "Fair",
    buyPrice: 120,
    sellPrice: 200,
    status: "live",
    image: "https://m.media-amazon.com/images/I/51VTbI5693L._AC_.jpg",
    desc: "LED, adjustable arm. Minor scratch on base.",
  },
]