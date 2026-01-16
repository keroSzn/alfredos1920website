import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Assuming react-icons is installing

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: scrolled ? 'rgba(26, 22, 23, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none'
        }}
      >
        <a href={import.meta.env.BASE_URL} style={{ textDecoration: 'none', color: 'var(--color-text-primary)', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '700', letterSpacing: '1px' }}>
          ALFREDO'S <span style={{ color: 'var(--color-accent)' }}>1920</span>
        </a>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Menu', 'About', 'Reservations', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'var(--color-text-primary)',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '500'
              }}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <About />
      <Menu />

      {/* Footer */}
      <footer id="contact" style={{ padding: '4rem 2rem', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-accent)', marginBottom: '2rem' }}>Visit Us</h2>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', color: 'var(--color-text-secondary)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaMapMarkerAlt />
              <span>4-6 Essex Road, Angel Islington, London N1 8LN</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaPhone />
              <span>+44 7310 314451</span>
            </span>
            <a
              href="https://www.instagram.com/alfredos1920/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
            >
              <FaInstagram size={20} />
              <span>@alfredos1920</span>
            </a>
          </div>

          {/* Google Maps Embed */}
          <div style={{ width: '100%', maxWidth: '800px', height: '300px', border: '1px solid var(--color-accent)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.387702845871!2d-0.1066734233769966!3d51.53655197181995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b606626577f%3A0xe5479d2b2707297f!2s4-6%20Essex%20Rd%2C%20London%20N1%208LN%2C%20UK!5e0!3m2!1sen!2suk!4v1705600000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          &copy; 2026 Alfredo's 1920 London. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
