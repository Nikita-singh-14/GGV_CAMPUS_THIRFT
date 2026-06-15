

interface ItemCardProps {
    logo?: string;
    title: string;
    description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
    logo,
    title,
    description,
}) => {
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
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = '#3730a3';
                e.currentTarget.style.boxShadow =
                    '0 4px 16px rgba(0,0,0,0.10)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {logo && (
                <img
                    src={logo}
                    alt={title}
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
                <strong
                    style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#111827',
                        marginBottom: '4px',
                    }}
                >
                    {title}
                </strong>

                <p
                    style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        margin: 0,
                        lineHeight: '1.5',
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ItemCard;