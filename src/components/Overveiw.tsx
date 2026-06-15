
// const Overview = () => {
//   return (
//     <div className="bg-white text-black py-10 px-6">

//       {/* Top Line */}
//       <div className="w-full h-0.5 bg-gray-300 mb-8 animate-pulse"></div>

//       {/* Stats Section */}
//       <div className="w-full flex flex-wrap items-center justify-between text-center gap-8">

//         {/* Stat 1 */}
//         <div className="flex-1 min-w-37.5 hover:scale-105 transition duration-300">
//           <h1 className="text-4xl font-bold">240+</h1>
//           <p className="text-gray-400 mt-2">Items sold</p>
//         </div>

//         {/* Stat 2 */}
//         <div className="flex-1 min-w-37.5 hover:scale-105 transition duration-300">
//           <h1 className="text-4xl font-bold">₹4.2L</h1>
//           <p className="text-gray-400 mt-2">Saved by students</p>
//         </div>

//         {/* Stat 3 */}
//         <div className="flex-1 min-w-37.5 hover:scale-105 transition duration-300">
//           <h1 className="text-4xl font-bold">3 days</h1>
//           <p className="text-gray-400 mt-2">Avg. sell time</p>
//         </div>

//         {/* Stat 4 */}
//         <div className="flex-1 min-w-37.5 hover:scale-105 transition duration-300">
//           <h1 className="text-4xl font-bold">100%</h1>
//           <p className="text-gray-400 mt-2">Verified listings</p>
//         </div>

//       </div>

//       {/* Bottom Line */}
//       <div className="w-full h-0.5 bg-gray-300 mt-8 animate-pulse"></div>

//     </div>
//   )
// }

// export default Overview

const Overveiw = () => {
    const highlights = [
        {
            emoji: '🔍',
            title: 'Inspect before you buy',
            description:
                'Every item goes through a physical condition check. What you see in the listing is exactly what you get — no catfishing.',
        },
        {
            emoji: '💸',
            title: 'Fair prices, always',
            description:
                'Our pricing engine suggests market-fair prices based on condition and category so sellers earn more and buyers pay less.',
        },
        {
            emoji: '🚀',
            title: 'Campus delivery',
            description:
                'No strangers, no courier fees. Items are delivered within campus by our verified student runners.',
        },
        {
            emoji: '🔒',
            title: 'Safe & secure',
            description:
                'Payments are held until you confirm receipt. Disputes are resolved by our team within 24 hours.',
        },
    ]

    return (
        <section style={{
            background: '#fff',
            padding: '80px 24px',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Heading */}
                <div style={{ textAlign: 'center', marginBottom: '52px' }}>
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
                        marginBottom: '14px',
                    }}>
                        Platform overview
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                        fontWeight: '800',
                        letterSpacing: '-0.02em',
                        margin: '0 0 12px',
                        color: '#111827',
                    }}>
                        Everything you need, nothing you don't
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#6b7280', margin: '0 auto', maxWidth: '500px', lineHeight: '1.6' }}>
                        CampusSwap is built from the ground up for the college experience — fast, honest, and student-first.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '24px',
                }}>
                    {highlights.map((h) => (
                        <div
                            key={h.title}
                            style={{
                                background: '#f9fafb',
                                border: '1px solid #e5e7eb',
                                borderRadius: '16px',
                                padding: '28px 24px',
                                transition: 'all 0.2s ease',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#3730a3'
                                e.currentTarget.style.background = '#fff'
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e5e7eb'
                                e.currentTarget.style.background = '#f9fafb'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <div style={{ fontSize: '2rem', marginBottom: '16px', lineHeight: 1 }}>{h.emoji}</div>
                            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', margin: '0 0 8px' }}>
                                {h.title}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                                {h.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Overveiw