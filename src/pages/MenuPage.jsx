import { useState, useEffect, useRef } from 'react';
import { FaWineGlass, FaCoffee, FaUtensils } from 'react-icons/fa';

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const menuRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const items = document.querySelectorAll('.scroll-animate');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [activeCategory]); // Re-run when category changes to observe new items

    const categories = [
        { name: 'All', icon: null },
        { name: 'Pasta', icon: <FaUtensils /> },
        { name: 'Coffee & Desserts', icon: <FaCoffee /> },
        { name: 'Wine', icon: <FaWineGlass /> }
    ];

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
            image: `${import.meta.env.BASE_URL}menu-pasta.png`
        },
        {
            id: 4,
            name: 'Espresso Martini',
            price: '£14',
            description: 'Vodka, coffee liqueur, fresh espresso.',
            category: 'Wine',
            image: null
        },
        {
            id: 5,
            name: 'Carbonara Authentica',
            price: '£20',
            description: 'Guanciale, Pecorino Romano, egg yolk, black pepper. No cream.',
            category: 'Pasta',
            image: null
        },
        {
            id: 6,
            name: 'Barolo 2018',
            price: '£85',
            description: 'Bottle. Intense, full-bodied red wine from Piedmont.',
            category: 'Wine',
            image: null
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="menu-page fade-in">
            {/* Menu Header */}
            <div className="menu-header">
                <div className="menu-header-content">
                    <h1 className="menu-title slide-up">Our Menu</h1>
                    <p className="menu-subtitle slide-up" style={{ animationDelay: '0.2s' }}>A Culinary Journey Through Time</p>
                </div>
            </div>

            <div className="menu-container" ref={menuRef}>
                {/* Visual Category Filter */}
                <div className="category-filter slide-up" style={{ animationDelay: '0.4s' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
                        >
                            {cat.icon && <span className="cat-icon">{cat.icon}</span>}
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Zig-Zag Menu List */}
                <div className="menu-items-list">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`menu-item-row scroll-animate ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
                        >
                            {/* Visual Side */}
                            <div className="menu-item-visual">
                                {item.image ? (
                                    <div className="menu-item-image-wrapper">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                ) : (
                                    <div className="menu-item-placeholder-wrapper">
                                        <span>{item.category === 'Wine' ? <FaWineGlass /> : <FaUtensils />}</span>
                                    </div>
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="menu-item-content">
                                <h3 className="item-name">{item.name}</h3>
                                <div className="item-divider"></div>
                                <p className="item-desc">{item.description}</p>
                                <div className="item-price">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
