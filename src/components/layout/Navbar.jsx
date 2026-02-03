
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoText, setLogoText] = useState('');

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typewriter effect
    useEffect(() => {
        const text = "NGIDIH TULUNG ID";
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setLogoText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src="/assets/img/logo_NGID.png" alt="NGIDIH TULUNG ID Logo" className="nav-logo-img" />
                        <h2>{logoText}</h2>
                    </div>

                    {/* Desktop Menu - inside the pill */}
                    <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <a href="#home" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>Beranda</a>
                        <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</a>
                        <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Layanan</a>
                        <a href="#reviews" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
                        <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kontak</a>
                    </div>

                    <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
