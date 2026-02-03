
import ParticlesCanvas from '../common/ParticlesCanvas';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <ParticlesCanvas />
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Bantuin Semua, Beres Tanpa Drama!</h1>
                    <p className="hero-description">NgidihTulungID menyediakan solusi instan untuk tugas kuliah, kebutuhan kantor, hingga aset digital bisnismu. Tidak perlu pusing deadline, biarkan kami yang handle.</p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <p className="stat-label">Project Done</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4.9/5</span>
                            <p className="stat-label">Rating</p>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary" style={{ borderRadius: '99px', padding: '16px 40px', fontSize: '1.1rem' }}>Consult Now</a>
                        <a href="#services" className="btn btn-secondary" style={{ borderRadius: '99px', padding: '16px 40px', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.2)' }}>View Catalog</a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="graphic-3d">
                        <div className="card-layer"></div>
                        <div className="card-layer"></div>
                        <div className="card-layer"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
