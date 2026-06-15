

const Footer = () => {
    const links = {
        Product: ['Browse items', 'Sell an item', 'How it works', 'Pricing'],
        Support: ['FAQs', 'Contact us', 'Safety tips', 'Report an issue'],
        Legal: ['Privacy policy', 'Terms of use', 'Cookie policy'],
    }

    return (
        <footer style={{
            background: '#1e1b4b',
            color: '#fff',
            padding: '64px 24px 32px',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Top row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '40px',
                    marginBottom: '48px',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                            <div style={{
                                width: '42px', height: '42px', borderRadius: '8px',
                                 display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: '16px',
                            }}><img
                     src="/logo.jpeg"
                     alt="logo"
                     className='border rounded-full'
                     
                 /></div>
                            <span style={{ fontWeight: '800', fontSize: '16px', letterSpacing: '-0.01em' }}>CampusSwap</span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.6', margin: 0 }}>
                            The trusted secondhand marketplace built for college students.
                        </p>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([section, items]) => (
                        <div key={section}>
                            <h4 style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', margin: '0 0 14px' }}>
                                {section}
                            </h4>
                            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.15s' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom row */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '24px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                }}>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                        © {new Date().getFullYear()} CampusSwap. Made with ❤️ for GGV students.
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                        Guru Ghasidas Vishwavidyalaya, Bilaspur
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer