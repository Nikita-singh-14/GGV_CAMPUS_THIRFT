

const Button = ({ text, variant = 'primary', onClick }) => {
    const styles = {
        base: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '13px 28px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: 'none',
            textDecoration: 'none',
            fontFamily: 'inherit',
        },
        primary: {
            background: '#f59e0b',
            color: '#1a1100',
        },
        outline: {
            background: 'transparent',
            color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.4)',
        },
        indigo: {
            background: '#3730a3',
            color: '#fff',
        },
    }

    return (
        <button
            onClick={onClick}
            style={{ ...styles.base, ...styles[variant] }}
            onMouseEnter={(e) => {
                if (variant === 'primary') e.currentTarget.style.background = '#d97706'
                if (variant === 'outline') e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                if (variant === 'indigo') e.currentTarget.style.background = '#1e1b4b'
                e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
                if (variant === 'primary') e.currentTarget.style.background = '#f59e0b'
                if (variant === 'outline') e.currentTarget.style.background = 'transparent'
                if (variant === 'indigo') e.currentTarget.style.background = '#3730a3'
                e.currentTarget.style.transform = 'translateY(0)'
            }}
        >
            {text}
        </button>
    )
}

export default Button