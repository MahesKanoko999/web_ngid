
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>NgidihTulungID</h3>
                        <p>“Bantuin Semua, Beres Tanpa Drama!” Layanan akademik dan digital yang mengutamakan kecepatan, kerapian, dan kerahasiaan data. Semua proses bisa kamu order online kapan pun.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/ngidih_tulungid/" aria-label="Instagram NgidihTulungID" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Layanan Populer</h4>
                        <ul>
                            <li><a href="#services">Penulisan Tugas</a></li>
                            <li><a href="#services">Pembuatan Proposal</a></li>
                            <li><a href="#services">Artikel & Konten</a></li>
                            <li><a href="#services">Penyuntingan Dokumen</a></li>
                            <li><a href="#services">Slide Presentasi</a></li>
                            <li><a href="#services">Desain Grafis</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Shortcut</h4>
                        <ul>
                            <li><a href="#about">Tentang NgidihTulungID</a></li>
                            <li><a href="#services">Catalog Layanan</a></li>
                            <li><a href="#reviews">Cerita Pelanggan</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Form Keluhan</a></li>
                            <li><a href="https://instagram.com/ngidihtulungid" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=6281246389770&text=Halo%20NGIDID%2C%20saya%20mau%20order" target="_blank" rel="noopener noreferrer">Chat WhatsApp</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Kontak</h4>
                        <p><i className="fas fa-map-marker-alt"></i> Desa Buwit, Kediri, Tabanan</p>
                        <p><i className="fas fa-phone"></i> +62 812-4638-9770</p>
                        <p><i className="fas fa-envelope"></i> ngidihtulungid@gmail.com</p>
                        <div className="partner-showcase">
                            <span className="partner-label">Partner with</span>
                            <div className="partner-links">
                                <a href="https://instagram.com/tulungweb" target="_blank" className="partner-chip" rel="noopener noreferrer">@tulungweb</a>
                                <a href="https://instagram.com/kanokostore" target="_blank" className="partner-chip" rel="noopener noreferrer">@kanokostore</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 NgidihTulungID. Semua hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
