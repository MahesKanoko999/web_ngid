
import ParticlesCanvas from '../common/ParticlesCanvas';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <ParticlesCanvas />
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">NgidihTulungID</h1>
                    <p className="hero-subtitle">“Bantuin Semua, Beres Tanpa Drama!”</p>
                    <p className="hero-description">NgidihTulungID bantu <a href="#services">penulisan tugas profesional</a>, proposal, artikel, editing dokumen, desain, hingga website sederhana secara cepat, rapi, dan berkualitas untuk pelajar, mahasiswa, pekerja, maupun pelaku bisnis.</p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Tugas Selesai</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">Rating</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Klien Puas</span>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">Hubungi Kami</a>
                        <a href="#services" className="btn btn-secondary">Lihat Layanan</a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-graphic">
                        <video autoPlay muted loop className="hero-logo-video">
                            <source src="/assets/img/logo_anim.webm" type="video/webm" />
                            {/* Fallback */}
                            <img src="/assets/img/logo_NGID.png" alt="NGIDIH TULUNG ID Logo" className="hero-logo-fallback" />
                        </video>
                    </div>
                    <div className="catalog-cta">
                        <div className="catalog-text">
                            <span className="catalog-label">Mau cek katalog?</span>
                            <p>Langsung saja cek di bawah ini</p>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=6281246389770&amp;text=Halo%20kak!%20saya%20mau%20kerjain%20tugas%20saya%2C%20tolong%20ya!%20ini%20tugas%20saya%20%3A" className="catalog-whatsapp" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                            <span>Lihat Catalog via WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
