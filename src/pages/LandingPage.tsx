
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Button from '../components/Button'
// import Card from '../components/ItemCard'
// import Overveiw from '../components/Overveiw'
// import ProductCard from '../components/ProductCards'

// const LandingPage = () => {
//     const categories = [
//         { logo: '/logo.jpeg', title: 'Electronics', description: 'Verified & tested' },
//         { logo: '/logo.jpeg', title: 'Textbooks', description: 'Save up to 70%' },
//         { logo: '/logo.jpeg', title: 'Dorm items', description: 'Ready on day one' },
//     ]

//     const buyerSteps = [
//         { title: 'Browse verified items', description: 'Every item is quality-checked before it goes live.' },
//         { title: 'Add to cart & pay', description: 'Secure checkout and campus delivery.' },
//         { title: 'Receive on campus', description: 'Fast campus delivery with no courier fees.' },
//     ]

//     const sellerSteps = [
//         { title: 'List your item', description: 'Quick listing with instant pricing suggestions.' },
//         { title: 'Get inspected', description: 'We verify condition before approval.' },
//         { title: 'Get paid', description: 'UPI transfer on acceptance — no waiting.' },
//     ]

//     const products = [
//         { icon: '📚', title: 'Calculus Vol. 2', category: 'Textbooks', price: '480', condition: 'Good' },
//         { icon: '💻', title: 'Dell Inspiron 15', category: 'Electronics', price: '19,500', condition: 'Good' },
//         { icon: '🎧', title: 'Sony Headphones', category: 'Electronics', price: '2,000', condition: 'Good' },
//         { icon: '📱', title: 'iPhone XR', category: 'Electronics', price: '9,500', condition: 'Fair' },
//     ]

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />

//             <main className="flex-grow">
//                 <section className="container mx-auto px-4 py-12 text-center max-w-6xl">
//                     <h1 className="text-3xl md:text-4xl font-bold leading-tight">
//                         Buy & sell college essentials the smart way
//                     </h1>
//                     <p className="mt-4 text-gray-600">
//                         Quality-checked secondhand textbooks, electronics, dorm items and more — verified by us before they reach you.
//                     </p>

//                     <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
//                         <Button text="Browse items" />
//                         <Button text="Sell your stuff" />
//                     </div>

//                     <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
//                         {categories.map((c) => (
//                             <Card key={c.title} logo={c.logo} title={c.title} description={c.description} />
//                         ))}
//                     </div>
//                 </section>

//                 <Overveiw />

//                 <section className="container mx-auto px-4 py-12 max-w-6xl">
//                     <h2 id="flows" className="text-2xl md:text-3xl font-bold text-center">Two flows. Zero confusion.</h2>
//                     <p className="text-center mt-2 text-gray-600">Whether you're buying or selling, the process is straightforward.</p>

//                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <div aria-labelledby="buyers" className="flex flex-col gap-4">
//                             <h3 id="buyers" className="text-lg font-semibold">For Buyers</h3>
//                             {buyerSteps.map((s) => (
//                                 <Card key={s.title} logo="/logo.jpeg" title={s.title} description={s.description} />
//                             ))}
//                         </div>

//                         <div aria-labelledby="sellers" className="flex flex-col gap-4">
//                             <h3 id="sellers" className="text-lg font-semibold">For Sellers</h3>
//                             {sellerSteps.map((s) => (
//                                 <Card key={s.title} logo="/logo.jpeg" title={s.title} description={s.description} />
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 <section className="container mx-auto px-4 py-12 max-w-6xl text-center">
//                     <h2 className="text-2xl md:text-3xl font-bold">Live Items</h2>
//                     <p className="text-gray-600 mt-2">Fresh on the shelf</p>

//                     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {products.map((p) => (
//                             <ProductCard key={p.title} icon={p.icon} title={p.title} category={p.category} price={p.price} condition={p.condition} />
//                         ))}
//                     </div>

//                     <div className="mt-6">
//                         <Button text="View all items" />
//                     </div>
//                 </section>

//                 <section className="container mx-auto px-4 py-12 max-w-6xl text-center">
//                     <h2 className="text-2xl md:text-3xl font-bold">Why us</h2>
//                     <p className="mt-2 text-gray-600">Built on trust</p>

//                     <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
//                         <Card logo="/logo.jpeg" title="Every item verified" description="We physically check every item before listing. No surprises." />
//                         <Card logo="/logo.jpeg" title="Sellers paid instantly" description="UPI transfer the same day we accept your item. No waiting." />
//                         <Card logo="/logo.jpeg" title="Campus-only" description="Built for your college. Delivery within campus. No strangers." />
//                     </div>
//                 </section>

//                 <section className="container mx-auto px-4 py-12 max-w-3xl">
//                     <div className="rounded-xl border border-blue-600 p-6 text-center hover:bg-blue-50 transition">
//                         <h3 className="text-xl font-semibold">Ready to buy or sell?</h3>
//                         <p className="mt-2 text-gray-600">Join hundreds of students already saving money on campus essentials.</p>
//                         <div className="mt-4 flex items-center justify-center gap-4">
//                             <Button text="Browse items" />
//                             <Button text="Sell an item" />
//                         </div>
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     )
// }

// export default LandingPage


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Overveiw from '../components/Overveiw'
import ProductCard from '../components/ProductCards'

const LandingPage = () => {
    const categories = [
        { emoji: '💻', title: 'Electronics', description: 'Verified & tested' },
        { emoji: '📚', title: 'Textbooks', description: 'Save up to 70%' },
        { emoji: '🛋️', title: 'Dorm items', description: 'Ready on day one' },
    ]

    const buyerSteps = [
        { step: '01', title: 'Browse verified items', description: 'Every item is quality-checked before it goes live.' },
        { step: '02', title: 'Add to cart & pay', description: 'Secure checkout and campus delivery.' },
        { step: '03', title: 'Receive on campus', description: 'Fast delivery with no courier fees.' },
    ]

    const sellerSteps = [
        { step: '01', title: 'List your item', description: 'Quick listing with instant pricing suggestions.' },
        { step: '02', title: 'Get inspected', description: 'We verify condition before approval.' },
        { step: '03', title: 'Get paid', description: 'UPI transfer on acceptance — no waiting.' },
    ]

    const products = [
        { icon: '📚', title: 'Calculus Vol. 2', category: 'Textbooks', price: '480', condition: 'Good' },
        { icon: '💻', title: 'Dell Inspiron 15', category: 'Electronics', price: '19,500', condition: 'Good' },
        { icon: '🎧', title: 'Sony Headphones', category: 'Electronics', price: '2,000', condition: 'Good' },
        { icon: '📱', title: 'iPhone XR', category: 'Electronics', price: '9,500', condition: 'Fair' },
    ]

    const trustPoints = [
        { icon: '🛡️', title: 'Every item verified', description: 'We physically check every item before listing. No surprises.' },
        { icon: '⚡', title: 'Sellers paid instantly', description: 'UPI transfer the same day we accept your item. No waiting.' },
        { icon: '🎓', title: 'Campus-only', description: 'Built for your college. Delivery within campus. No strangers.' },
    ]

    const stats = [
        { num: '500+', label: 'Active listings' },
        { num: '70%', label: 'Avg. savings' },
        { num: '24h', label: 'Seller payout' },
        { num: '100%', label: 'Verified items' },
    ]

    return (
        <div className="landing-page">
            <style>{`
                :root {
                    --indigo: #3730a3;
                    --indigo-dark: #1e1b4b;
                    --indigo-light: #eef2ff;
                    --amber: #f59e0b;
                    --amber-light: #fef3c7;
                    --text: #111827;
                    --text-muted: #6b7280;
                    --border: #e5e7eb;
                    --surface: #fff;
                    --surface-alt: #f9fafb;
                }
                .landing-page * { box-sizing: border-box; }
                .landing-page { min-height: 100vh; display: flex; flex-direction: column; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: var(--text); background: var(--surface); }

                /* ── Utility ── */
                .lp-section { padding: 80px 24px; }
                .lp-section--alt { background: var(--surface-alt); }
                .lp-section--dark { background: var(--indigo-dark); }
                .lp-container { max-width: 1100px; margin: 0 auto; }
                .lp-label { display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--indigo); background: var(--indigo-light); padding: 5px 12px; border-radius: 999px; margin-bottom: 14px; }
                .lp-title { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 12px; }
                .lp-sub { font-size: 1.05rem; color: var(--text-muted); margin: 0; }

                /* ── Hero ── */
                .hero { background: linear-gradient(135deg, var(--indigo-dark) 0%, var(--indigo) 60%, #4f46e5 100%); padding: 100px 24px 80px; text-align: center; position: relative; overflow: hidden; }
                .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 50%, rgba(245,158,11,.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,.06) 0%, transparent 40%); }
                .hero-inner { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; }
                .hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(245,158,11,.18); border: 1px solid rgba(245,158,11,.35); color: var(--amber); font-size: 13px; font-weight: 600; letter-spacing: .03em; padding: 6px 14px; border-radius: 999px; margin-bottom: 28px; }
                .hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; color: #fff; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 20px; }
                .hero h1 span { color: var(--amber); }
                .hero p { font-size: clamp(1rem, 2vw, 1.2rem); color: rgba(255,255,255,.72); line-height: 1.7; margin: 0 auto 36px; max-width: 560px; }
                .hero-cta { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }

                /* ── Buttons ── */
                .btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; border: none; font-family: inherit; }
                .btn-primary { background: var(--amber); color: #1a1100; }
                .btn-primary:hover { background: #d97706; transform: translateY(-1px); }
                .btn-outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,.4); }
                .btn-outline:hover { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.7); }
                .btn-indigo { background: var(--indigo); color: #fff; }
                .btn-indigo:hover { background: var(--indigo-dark); transform: translateY(-1px); }
                .btn-sm { padding: 10px 20px; font-size: 14px; }

                /* ── Hero category chips ── */
                .hero-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 52px; }
                .chip { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); border-radius: 999px; padding: 10px 20px; transition: all 0.2s ease; cursor: pointer; }
                .chip:hover { background: rgba(255,255,255,.18); border-color: rgba(255,255,255,.35); transform: translateY(-2px); }
                .chip-icon { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,.15); display: flex; align-items: center; justify-content: center; font-size: 18px; }
                .chip strong { display: block; font-size: 14px; font-weight: 700; color: #fff; }
                .chip span { font-size: 12px; color: rgba(255,255,255,.6); }

                /* ── Stats ── */
                .stats-bar { background: var(--surface); border-bottom: 1px solid var(--border); }
                .stats-inner { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }
                .stat-item { padding: 24px 20px; text-align: center; border-right: 1px solid var(--border); }
                .stat-item:last-child { border-right: none; }
                .stat-num { font-size: 1.75rem; font-weight: 800; color: var(--indigo); line-height: 1; }
                .stat-lbl { font-size: 13px; color: var(--text-muted); margin-top: 4px; }

                /* ── Flows ── */
                .flows-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 52px; }
                .flow-panel { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
                .flow-header { padding: 18px 24px; border-bottom: 1px solid var(--border); }
                .flow-badge { font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; }
                .flow-badge--buyer { background: #dbeafe; color: #1e40af; }
                .flow-badge--seller { background: var(--amber-light); color: #92400e; }
                .flow-step { display: flex; align-items: flex-start; gap: 16px; padding: 16px 24px; border-bottom: 1px solid var(--border); transition: background 0.2s; }
                .flow-step:last-child { border-bottom: none; }
                .flow-step:hover { background: var(--surface-alt); }
                .step-num { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
                .step-num--buyer { background: var(--indigo-light); color: var(--indigo); }
                .step-num--seller { background: var(--amber-light); color: #92400e; }
                .step-body strong { display: block; font-size: 14px; font-weight: 700; margin-bottom: 2px; color: var(--text); }
                .step-body p { font-size: 13px; color: var(--text-muted); margin: 0; line-height: 1.5; }

                /* ── Products ── */
                .products-header { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 40px; }
                .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }

                /* ── Trust ── */
                .trust-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 48px; }
                .trust-card { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); border-radius: 16px; padding: 28px; transition: all 0.2s ease; }
                .trust-card:hover { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.25); }
                .trust-icon { font-size: 2rem; margin-bottom: 16px; }
                .trust-card h3 { font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 8px; }
                .trust-card p { font-size: 14px; color: rgba(255,255,255,.6); margin: 0; line-height: 1.6; }

                /* ── CTA banner ── */
                .cta-banner { background: var(--indigo-light); border: 1.5px solid #c7d2fe; border-radius: 24px; padding: 56px 40px; text-align: center; }
                .cta-banner h2 { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 800; letter-spacing: -0.02em; margin: 0 0 12px; }
                .cta-banner p { font-size: 1rem; color: var(--text-muted); margin: 0 auto 32px; max-width: 420px; }
                .cta-buttons { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }

                /* ── Responsive ── */
                @media (max-width: 700px) { .flows-grid { grid-template-columns: 1fr; } }
                @media (max-width: 600px) {
                    .lp-section { padding: 60px 18px; }
                    .hero { padding: 80px 18px 60px; }
                    .cta-banner { padding: 40px 20px; }
                    .stat-item { padding: 18px 10px; }
                    .products-header { flex-direction: column; align-items: flex-start; }
                }
            `}</style>

            <Navbar />

            <main style={{ flexGrow: 1 }}>

                {/* ── Hero ── */}
                <section className="hero">
                    <div className="hero-inner">
                        <div className="hero-badge">🎓 Built for GGV students</div>
                        <h1>Buy & sell campus essentials <span>the smart way</span></h1>
                        <p>Quality-checked secondhand textbooks, electronics, and dorm items — verified by us before they reach you.</p>
                        <div className="hero-cta">
                            <button className="btn btn-primary">Browse items →</button>
                            <button className="btn btn-outline">Sell your stuff</button>
                        </div>
                        <div className="hero-chips">
                            {categories.map((c) => (
                                <div key={c.title} className="chip">
                                    <div className="chip-icon">{c.emoji}</div>
                                    <div>
                                        <strong>{c.title}</strong>
                                        <span>{c.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Stats ── */}
                <div className="stats-bar">
                    <div className="lp-container">
                        <div className="stats-inner">
                            {stats.map((s) => (
                                <div key={s.label} className="stat-item">
                                    <div className="stat-num">{s.num}</div>
                                    <div className="stat-lbl">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Overview ── */}
                <Overveiw />

                {/* ── How it works ── */}
                <section className="lp-section lp-section--alt">
                    <div className="lp-container">
                        <div className="lp-label">How it works</div>
                        <h2 className="lp-title">Two flows. Zero confusion.</h2>
                        <p className="lp-sub">Whether you're buying or selling, the process is clear and fast.</p>

                        <div className="flows-grid">
                            <div className="flow-panel">
                                <div className="flow-header">
                                    <span className="flow-badge flow-badge--buyer">For Buyers</span>
                                </div>
                                {buyerSteps.map((s) => (
                                    <div key={s.title} className="flow-step">
                                        <div className="step-num step-num--buyer">{s.step}</div>
                                        <div className="step-body">
                                            <strong>{s.title}</strong>
                                            <p>{s.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flow-panel">
                                <div className="flow-header">
                                    <span className="flow-badge flow-badge--seller">For Sellers</span>
                                </div>
                                {sellerSteps.map((s) => (
                                    <div key={s.title} className="flow-step">
                                        <div className="step-num step-num--seller">{s.step}</div>
                                        <div className="step-body">
                                            <strong>{s.title}</strong>
                                            <p>{s.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Live Items ── */}
                <section className="lp-section">
                    <div className="lp-container">
                        <div className="products-header">
                            <div>
                                <div className="lp-label">Just listed</div>
                                <h2 className="lp-title" style={{ margin: 0 }}>Live items</h2>
                            </div>
                            <button className="btn btn-indigo btn-sm">View all →</button>
                        </div>
                        <div className="product-grid">
                            {products.map((p) => (
                                <ProductCard
                                    key={p.title}
                                    icon={p.icon}
                                    title={p.title}
                                    category={p.category}
                                    price={p.price}
                                    condition={p.condition}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Why us ── */}
                <section className="lp-section lp-section--dark">
                    <div className="lp-container" style={{ textAlign: 'center' }}>
                        <div className="lp-label" style={{ background: 'rgba(255,255,255,.1)', color: '#fff' }}>Why choose us</div>
                        <h2 className="lp-title" style={{ color: '#fff', marginTop: '12px' }}>Built on trust</h2>
                        <p className="lp-sub" style={{ color: 'rgba(255,255,255,.6)', margin: '0 auto' }}>
                            Every feature we build starts with one question: is this safe for students?
                        </p>
                        <div className="trust-grid">
                            {trustPoints.map((t) => (
                                <div key={t.title} className="trust-card">
                                    <div className="trust-icon">{t.icon}</div>
                                    <h3>{t.title}</h3>
                                    <p>{t.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Final CTA ── */}
                <section className="lp-section">
                    <div className="lp-container">
                        <div className="cta-banner">
                            <h2>Ready to save on campus essentials?</h2>
                            <p>Join hundreds of GGV students already buying and selling smarter.</p>
                            <div className="cta-buttons">
                                <button className="btn btn-primary">Browse items →</button>
                                <button className="btn btn-indigo">Sell an item</button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default LandingPage


