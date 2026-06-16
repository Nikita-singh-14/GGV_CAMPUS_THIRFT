interface ButtonProps {
    text: string;
    variant?: 'primary' | 'outline' | 'indigo';
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant = 'primary',
    onClick,
    type = 'button',
}) => {
    const styles = {
        base: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '13px 28px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: 'none',
            textDecoration: 'none',
            fontFamily: 'inherit',
        } as React.CSSProperties,

        primary: {
            background: '#f59e0b',
            color: '#1a1100',
        } as React.CSSProperties,

        outline: {
            background: 'transparent',
            color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.4)',
        } as React.CSSProperties,

        indigo: {
            background: '#3730a3',
            color: '#fff',
        } as React.CSSProperties,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                ...styles.base,
                ...styles[variant],
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (variant === 'primary')
                    e.currentTarget.style.background = '#d97706';

                if (variant === 'outline')
                    e.currentTarget.style.background =
                        'rgba(255,255,255,0.1)';

                if (variant === 'indigo')
                    e.currentTarget.style.background = '#1e1b4b';

                e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (variant === 'primary')
                    e.currentTarget.style.background = '#f59e0b';

                if (variant === 'outline')
                    e.currentTarget.style.background = 'transparent';

                if (variant === 'indigo')
                    e.currentTarget.style.background = '#3730a3';

                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {text}
        </button>
    );
};

export default Button;