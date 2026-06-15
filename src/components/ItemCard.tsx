
// type CardProps = {
//   logo: string;
//   title: string;
//   description: string;
// };

// const Card = ({ logo, title, description }: CardProps) => {
//   return (
//     <div className="px-4 w-72 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
//        {/*} className="w-72 bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"

//       {/* Logo */}
//       <img
//         src={logo}
//         alt={title}
//         className="w-16 h-16 object-cover rounded-full mb-4"
//       />

//       {/* Title */}
//       <h2 className="text-xl font-bold text-gray-800">
//         {title}
//       </h2>

//       {/* Description */}
//       <p className="text-gray-600 mt-2 text-sm">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default Card;

const ItemCard = ({ logo, title, description }) => {
    return (
        <div
            style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.2s ease',
                cursor: 'default',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3730a3'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'
                e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
            }}
        >
            {logo && (
                <img
                    src={logo}
                    alt=""
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        flexShrink: 0,
                    }}
                />
            )}
            <div>
                <strong style={{ display: 'block', fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>
                    {title}
                </strong>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ItemCard