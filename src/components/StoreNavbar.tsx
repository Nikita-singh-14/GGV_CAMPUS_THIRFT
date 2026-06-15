
// import { Link } from 'react-router-dom'
// import { FaUserCircle } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { useCart } from '../context/CartContext';

// const StoreNavbar = () => {
//     const {cartCount} = useCart();

//     return (
//         <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">

//             {/* Logo */}
//             <div className="flex items-center gap-3">
//                 <img
//                     src="/logo.jpeg"
//                     alt="logo"
//                     className="w-12 h-12 rounded-full object-cover"
//                 />

//                 <h1 className="text-2xl font-bold text-blue-600">
//                     GGV_CAMPUS_THRIFT
//                 </h1>
//             </div>

//             {/* Nav Links */}

//             <div className="relative w-120">
//                 <input
//                     type="text"
//                     placeholder="Search items..."
//                     className="
//       w-full
//       h-11
//       pl-10
//       pr-4
//       text-sm
//       border
//       border-gray-300
//       rounded-full
//       outline-none
//       focus:ring-2
//       focus:ring-blue-400
//       shadow-md
//       transition-all
//     "
//                 />

//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute left-3 top-3 h-5 w-5 text-gray-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                 </svg>
//             </div>
//             <div className="flex items-center gap-4">

//                 <Link
//                     to="/add-to-cart"
//                     className="relative flex items-center justify-center w-12 h-12 bg-white  rounded-full hover:bg-gray-100 transition"
//                 >
//                     {/* Cart Icon */}
//                     <FaShoppingCart className="text-2xl text-black" />

//                     {/* Badge */}
//                     <span
//                         className="
//       absolute 
//       -top-1 
//       -right-1 
//       bg-red-500 
//       text-white 
//       text-xs 
//       font-bold 
//       w-5 
//       h-5 
//       flex 
//       items-center 
//       justify-center 
//       rounded-full
//     "
//                     >
//                         {cartCount}
//                     </span>
//                 </Link>

//                 <Link to="/user-profile" className="relative flex items-center justify-center w-12 h-12   rounded-full hover:bg-gray-100 transition">
//                     <FaUserCircle className='text-2xl'/>

//                 </Link>
                

//             </div>
//         </nav>
//     )
// }

// export default StoreNavbar


import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

const StoreNavbar = () => {
    const { cartCount } = useCart()

    return (
        <>
            <style>{`
                .store-nav {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.92);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid #e5e7eb;
                }
                .store-nav-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 24px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                }

                /* Logo */
                .store-nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    flex-shrink: 0;
                }
                .store-nav-logo-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    background: #3730a3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .store-nav-logo-icon img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px;
                }
                .store-nav-logo-text {
                    font-weight: 800;
                    font-size: 17px;
                    color: #1e1b4b;
                    letter-spacing: -0.01em;
                    white-space: nowrap;
                }

                /* Search */
                .store-nav-search {
                    flex: 1;
                    max-width: 420px;
                    position: relative;
                }
                .store-nav-search input {
                    width: 100%;
                    height: 40px;
                    padding: 0 16px 0 40px;
                    font-size: 14px;
                    border: 1px solid #e5e7eb;
                    border-radius: 999px;
                    outline: none;
                    background: #f9fafb;
                    color: #111827;
                    transition: all 0.2s ease;
                    font-family: inherit;
                }
                .store-nav-search input:focus {
                    border-color: #3730a3;
                    background: #fff;
                    box-shadow: 0 0 0 3px rgba(55, 48, 163, 0.1);
                }
                .store-nav-search input::placeholder {
                    color: #9ca3af;
                }
                .store-nav-search svg {
                    position: absolute;
                    left: 13px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 16px;
                    height: 16px;
                    color: #9ca3af;
                    pointer-events: none;
                }

                /* Actions */
                .store-nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    flex-shrink: 0;
                }
                .store-nav-icon-btn {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    transition: background 0.15s ease;
                    text-decoration: none;
                    color: #374151;
                }
                .store-nav-icon-btn:hover {
                    background: #f3f4f6;
                    color: #1e1b4b;
                }
                .store-nav-icon-btn svg,
                .store-nav-icon-btn .nav-icon {
                    font-size: 20px;
                }
                .cart-badge {
                    position: absolute;
                    top: -2px;
                    right: -2px;
                    background: #ef4444;
                    color: #fff;
                    font-size: 10px;
                    font-weight: 700;
                    min-width: 18px;
                    height: 18px;
                    padding: 0 4px;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #fff;
                    line-height: 1;
                }
                .store-nav-divider {
                    width: 1px;
                    height: 24px;
                    background: #e5e7eb;
                    margin: 0 4px;
                }

                /* Responsive */
                @media (max-width: 640px) {
                    .store-nav-logo-text { display: none; }
                    .store-nav-search { max-width: 100%; }
                    .store-nav-inner { gap: 10px; }
                }
            `}</style>

            <nav className="store-nav">
                <div className="store-nav-inner">

                    {/* Logo */}
                    <Link to="/" className="store-nav-logo">
                        <div className="store-nav-logo-icon">
                            <img src="/logo.jpeg" alt="CampusSwap logo" />
                        </div>
                        <span className="store-nav-logo-text">CampusSwap</span>
                    </Link>

                    {/* Search */}
                    <div className="store-nav-search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search items..."
                            aria-label="Search items"
                        />
                    </div>

                    {/* Actions */}
                    <div className="store-nav-actions">

                        {/* Cart */}
                        <Link
                            to="/add-to-cart"
                            className="store-nav-icon-btn"
                            aria-label={`Cart, ${cartCount} items`}
                        >
                            <FaShoppingCart className="nav-icon" />
                            {cartCount > 0 && (
                                <span className="cart-badge">
                                    {cartCount > 99 ? '99+' : cartCount}
                                </span>
                            )}
                        </Link>

                        <div className="store-nav-divider" />

                        {/* Profile */}
                        <Link
                            to="/user-profile"
                            className="store-nav-icon-btn"
                            aria-label="User profile"
                        >
                            <FaUserCircle className="nav-icon" />
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default StoreNavbar