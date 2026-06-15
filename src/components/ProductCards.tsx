
// type ProductCardProps = {
//   icon: string;
//   title: string;
//   category: string;
//   price: string;
//   condition: string;
// };

// const ProductCard = ({
//   icon,
//   title,
//   category,
//   price,
//   condition,
// }: ProductCardProps) => {
//   return (
//     <div className="px-4 w-92 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
//       {/* Top Icon Section */}
//       <div className="bg-white text-black h-32 flex items-center justify-center text-5xl">
//         {icon}
//       </div>

//       {/* Content */}
//       <div className="p-4">

//         {/* Title */}
//         <h2 className="text-white text-xl font-bold">
//           {title}
//         </h2>

//         {/* Category */}
//         <p className="text-gray-400 text-sm mt-1">
//           {category}
//         </p>

//         {/* Bottom */}
//         <div className="flex items-center justify-between mt-4">

//           {/* Price */}
//           <h3 className="text-blue-400 text-2xl font-bold">
//             ₹{price}
//           </h3>

//           {/* Condition */}
//           <span className="bg-green-900 text-green-400 text-sm px-3 py-1 rounded-full">
//             {condition}
//           </span>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ icon, title, category, price, condition }) => {
    const conditionStyle =
        condition === 'Good'
            ? { background: '#dcfce7', color: '#166534' }
            : { background: '#fef3c7', color: '#92400e' }

    return (
        <div
            style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3730a3'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'
                e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
            }}
        >
            <div style={{ fontSize: '2.5rem', lineHeight: 1 }}>{icon}</div>

            <div style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                color: '#3730a3',
            }}>
                {category}
            </div>

            <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0, lineHeight: '1.3', color: '#111827' }}>
                {title}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e1b4b' }}>
                    ₹{price}
                </span>
                <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    ...conditionStyle,
                }}>
                    {condition}
                </span>
            </div>
        </div>
    )
}

export default ProductCard