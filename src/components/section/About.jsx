
const About = () => {
    return (
        <section id="about" className="about-modern">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Siapa Kami?</h2>
                    <p className="section-subtitle">Tim profesional di balik setiap tugas yang selesai tepat waktu.</p>
                </div>

                <div className="org-deck">
                    {/* Dika */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Dika.jpg')" }}></div>
                        <div className="team-info">
                            <span className="team-role">CEO</span>
                            <h3>Dika</h3>
                        </div>
                    </div>

                    {/* Mahes */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Mahes.jpeg')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Co-Founder</span>
                            <h3>Mahes Kanoko</h3>
                        </div>
                    </div>

                    {/* Eka */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/eka clarissa.png')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Lead Admin</span>
                            <h3>Eka Clarissa</h3>
                        </div>
                    </div>

                    {/* Budiana */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Diana.jpeg')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Head of Social Media</span>
                            <h3>Budiana</h3>
                        </div>
                    </div>

                    {/* Made Candra */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Made candra.png')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Admin Pagi</span>
                            <h3>Made Candra</h3>
                        </div>
                    </div>

                    {/* Kirana */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Kirana anggiswari.png')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Admin Siang</span>
                            <h3>Kirana Anggiswari</h3>
                        </div>
                    </div>

                    {/* Dimas */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Dimas.png')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Admin Malam</span>
                            <h3>Dimas</h3>
                        </div>
                    </div>

                    {/* Pande */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Pande.jpeg')" }}></div>
                        <div className="team-info">
                            <span className="team-role">Video & Motion</span>
                            <h3>Pande Suardana</h3>
                        </div>
                    </div>

                    {/* Amel */}
                    <div className="team-card">
                        <div className="team-img" style={{ backgroundImage: "url('/assets/img/Amel.png')" }}></div>
                        <div className="team-info">
                            <span className="team-role">QC Social Media</span>
                            <h3>Amel</h3>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-dim)' }}>
                    <p><i className="fas fa-arrows-alt-h"></i> Geser untuk melihat tim lainnya</p>
                </div>
            </div>
        </section>
    );
};

export default About;
