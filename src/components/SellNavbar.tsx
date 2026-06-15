// const SellNavbar = () => {
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
//             <p className="text-2xl text-gray-700"><b>Sell Your Item</b></p>
//         </nav>
//     );
// };

// export default SellNavbar;

const SellNavbar = () => {
    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            width: '100%',
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
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: '#3730a3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        flexShrink: 0,
                    }}>
                        🎓
                    </div>
                    <span style={{
                        fontWeight: '800',
                        fontSize: '17px',
                        color: '#1e1b4b',
                        letterSpacing: '-0.01em',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}>
                        GGV_CAMPUS_THRIFT
                    </span>
                </a>

                {/* Page title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#3730a3',
                        background: '#eef2ff',
                        padding: '5px 12px',
                        borderRadius: '999px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}>
                        Sell your item
                    </span>
                </div>

                {/* Back link */}
                <a
                    href="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#3730a3',
                        textDecoration: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        transition: 'background 0.15s',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#eef2ff'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                    ← Back to listings
                </a>

            </div>
        </nav>
    )
}

export default SellNavbar