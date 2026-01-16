const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 2rem', backgroundColor: '#2C1A1D', color: '#F5F5DC' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h3 className="fade-in" style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Our Story</h3>
                <h2 className="slide-up" style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>Born in Rome, Reimagined in London</h2>
                <p className="slide-up" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', maxWidth: '700px', animationDelay: '0.2s' }}>
                    Alfredo's 1920 began as a small family espresso bar in the cobblestone streets of Trastevere.
                    Today, we bring that same dedication to quality and atmosphere to London.
                    Every bean is roasted to perfection, every pasta shape is hand-rolled daily, and every guest is treated like family.
                    <br /><br />
                    We believe that true Italian luxury isn't about complexity—it's about the simplicity of the finest ingredients,
                    served with passion and grace.
                </p>
                <div className="slide-up" style={{ marginTop: '3rem', fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', animationDelay: '0.4s' }}>
                    "La Dolce Vita."
                </div>
            </div>
        </section>
    );
};

export default About;
