import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import './App.css';
import { FaInstagram, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle Hash Scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo-link">
          ALFREDO'S <span className="logo-accent">1920</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links-container">
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#reservations" className="nav-link">Reservations</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/menu" className="mobile-nav-link">Menu</Link>
        <Link to="/#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/#reservations" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Reservations</Link>
        <Link to="/#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      {/* Footer */}
      <footer id="contact" style={{ padding: '4rem 2rem', backgroundColor: 'var(--color-bg-secondary)', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-accent)', marginBottom: '2rem' }}>Visit Us</h2>

        {/* Reservation Info (Adding hidden helper for link) */}
        <div id="reservations" style={{ marginBottom: '2rem' }}></div>

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
