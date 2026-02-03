
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoText, setLogoText] = useState('');
    const [activeSection, setActiveSection] = useState('home');

    // Scroll effect for navbar background
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

    // IntersectionObserver for active section detection
    useEffect(() => {
        const sections = ['home', 'about', 'services', 'reviews', 'contact'];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Trigger when section is in upper portion
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
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

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
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
                        <a
                            href="#home"
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={() => handleNavClick('home')}
                        >Beranda</a>
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={() => handleNavClick('about')}
                        >Tentang Kami</a>
                        <a
                            href="#services"
                            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                            onClick={() => handleNavClick('services')}
                        >Layanan</a>
                        <a
                            href="#reviews"
                            className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
                            onClick={() => handleNavClick('reviews')}
                        >Reviews</a>
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => handleNavClick('contact')}
                        >Kontak</a>
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
