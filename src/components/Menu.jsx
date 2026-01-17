import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Pasta', 'Coffee & Desserts', 'Wine'];

    const menuItems = [
        {
            id: 1,
            name: 'Truffle Tagliatelle',
            price: '£24',
            description: 'Handmade tagliatelle, black truffle shavings, parmesan cream.',
            category: 'Pasta',
            image: `${import.meta.env.BASE_URL}menu-pasta.png`
        },
        {
            id: 2,
            name: 'Signature Cappuccino & Tiramisu',
            price: '£12',
            description: 'Artisanal coffee blend served with our house-made classic Tiramisu.',
            category: 'Coffee & Desserts',
            image: `${import.meta.env.BASE_URL}menu-coffee.png`
        },
        {
            id: 3,
            name: 'Cacio e Pepe',
            price: '£18',
            description: 'Pecorino Romano, black pepper, tonnarelli pasta.',
            category: 'Pasta',
            image: `${import.meta.env.BASE_URL}menu-pasta.png` // Reusing for demo if needed, or placeholder
        },
        {
            id: 4,
            name: 'Espresso Martini',
            price: '£14',
            description: 'Vodka, coffee liqueur, fresh espresso.',
            category: 'Wine',
            image: null // detailed text only for now or use placeholder
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h3 style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem', marginBottom: '1rem' }}>Our Menu</h3>
                    <h2 style={{ fontSize: '3rem', color: 'var(--color-text-primary)' }}>Culinary Excellence</h2>
                </div>

                {/* Category Filter */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                color: activeCategory === cat ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                                borderBottom: activeCategory === cat ? '1px solid var(--color-accent)' : '1px solid transparent',
                                paddingBottom: '0.5rem',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="menu-grid">
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            className="fade-in"
                            style={{
                                backgroundColor: 'var(--color-bg-secondary)',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {item.image && (
                                <div style={{ height: '250px', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                                    />
                                </div>
                            )}
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                    <h4 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>{item.name}</h4>
                                    <span style={{ color: 'var(--color-accent)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{item.price}</span>
                                </div>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link
                        to="/menu"
                        style={{
                            display: 'inline-block',
                            border: '1px solid var(--color-accent)',
                            padding: '1rem 3rem',
                            color: 'var(--color-accent)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                            e.currentTarget.style.color = 'var(--color-bg-primary)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--color-accent)';
                        }}
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;
