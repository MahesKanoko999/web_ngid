
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoText, setLogoText] = useState('');

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Typewriter effect for Logo
    useEffect(() => {
        const text = "NGIDIH TULUNG ID";
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                setLogoText((prev) => prev + text.charAt(i));
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Initial delay before typing
        setTimeout(() => {
            setLogoText('');
            // We need a way to increment i in the closure or use a different approach.
            // Let's use a simpler loop for React.
        }, 1000);

        // Better React Typewriter
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
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} style={
            isScrolled ? {
                background: 'rgba(30, 60, 114, 0.95)',
                backdropFilter: 'blur(25px)',
                borderBottom: '1px solid rgba(135, 206, 235, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            } : {}
        }>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src="/assets/img/logo_NGID.png" alt="NGIDIH TULUNG ID Logo" className="nav-logo-img" />
                        <h2 style={
                            // Quick typewriter cursor effect
                            { borderRight: logoText.length < 16 ? '2px solid #87ceeb' : 'none' }
                        }>{logoText}</h2>
                    </div>
                    <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Beranda</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Layanan</a>
                        </li>
                        <li className="nav-item">
                            <a href="#reviews" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Review</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faq" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kontak</a>
                        </li>
                    </ul>
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
