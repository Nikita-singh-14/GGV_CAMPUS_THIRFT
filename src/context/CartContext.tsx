import { createContext, useContext, useState } from "react"

const CartContext = createContext<any>(null);
export const CartProvider = ({ children }: any) => {
    const [cartCount, setCartCount] = useState(0);
    const addToCart = () => {
        setCartCount((prev) => prev+1);
    }
  return (
    <CartContext.Provider value={{cartCount, addToCart}}>
        {children}

    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);