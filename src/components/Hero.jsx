import { useEffect, useRef } from 'react';

const Hero = () => {
    return (
        <section
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Image Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for text readability
                    zIndex: 1
                }}
            />

            {/* Background Image - will be replaced by generated image */}
            <div
                className="hero-bg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)`, // We will generate this
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    transform: 'scale(1.1)' // For subtle zoom effect later
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: '800px',
                    padding: '0 2rem'
                }}
            >
                <h2
                    className="fade-in"
                    style={{
                        color: 'var(--color-accent)',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginBottom: '1rem'
                    }}
                >
                    Authentic Italian Taste
                </h2>
                <h1
                    className="slide-up"
                    style={{
                        fontSize: '5rem',
                        marginBottom: '2rem',
                        color: '#fff',
                        textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        lineHeight: 1.1
                    }}
                >
                    A Taste of Rome <br /> in the Heart of London
                </h1>
                <p
                    className="slide-up"
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        animationDelay: '0.2s'
                    }}
                >
                    Experience handcrafted pasta, artisanal coffee, and the finest Italian desserts in a modern, elegant setting.
                </p>
                <button
                    className="slide-up"
                    style={{
                        padding: '1rem 2.5rem',
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-bg-primary)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        animationDelay: '0.4s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--color-accent-hover)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-accent)'}
                >
                    View Menu
                </button>
            </div>
        </section>
    );
};

export default Hero;
