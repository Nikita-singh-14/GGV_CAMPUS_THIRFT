
// import {Link} from 'react-router-dom';

// const Navbar = () => {
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
//             <ul className="hidden md:flex items-center gap-16 text-gray-700 font-medium">

//         <Link to="/how-it-works">
//           <li className="hover:text-blue-600 cursor-pointer">
//             How It Works
//           </li>
//         </Link>

//         <Link to="/store">
//           <li className="hover:text-blue-600 cursor-pointer">
//             Browse Items
//           </li>
//         </Link>

//         <Link to="/sell">
//           <li className="hover:text-blue-600 cursor-pointer">
//             Sell
//           </li>
//         </Link>

//       </ul>

//             {/* Buttons */}
//             <div className="flex items-center gap-4">

//                 <Link to="/login">
//                     <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
//                         Login
//                     </button>
//                 </Link>

//                 <Link to="/signup">
//                     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                         Sign Up
//                     </button>
//                 </Link>

//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { label: 'Browse', href: '/store' },
        { label: 'How it works', href: '/how-it-works' },
        { label: 'Sell', href: '/sell' },
    ]

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #e5e7eb',
        }}>
            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '0 24px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '30px',
                        background: '#3730a3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        
                    }}><img
                     src="/logo.jpeg"
                     alt="logo"
                     className='border rounded-full'
                     
                 /></div>
                    <span style={{ fontWeight: '800', fontSize: '17px', color: '#1e1b4b', letterSpacing: '-0.01em' }}>
                        GGV_CAMPUS_THRIFT
                    </span>
                </a>

                {/* Desktop links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#374151',
                                textDecoration: 'none',
                                transition: 'color 0.15s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#3730a3'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <a
                        href="/login"
                        style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#3730a3',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#eef2ff'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        Sign in
                    </a>
                    <a
                        href="/signup"
                        style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#fff',
                            background: '#3730a3',
                            textDecoration: 'none',
                            padding: '8px 18px',
                            borderRadius: '8px',
                            transition: 'background 0.15s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#1e1b4b'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#3730a3'}
                    >
                        Get started
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '22px',
                            padding: '4px',
                            color: '#374151',
                        }}
                        className="nav-hamburger"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    borderTop: '1px solid #e5e7eb',
                    padding: '16px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    background: '#fff',
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{ fontSize: '15px', fontWeight: '600', color: '#374151', textDecoration: 'none' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 640px) {
                    .nav-desktop { display: none !important; }
                    .nav-hamburger { display: block !important; }
                }
            `}</style>
        </nav>
    )
}

export default Navbar