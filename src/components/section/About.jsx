
const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Siapa Kami?</h2>
                    <p className="section-subtitle">Tim profesional di balik setiap tugas yang selesai tepat waktu.</p>
                </div>

                {/* Organizational Chart */}
                <div className="org-chart">
                    {/* Level 1 - CEO */}
                    <div className="org-level org-level-single">
                        <div className="org-card org-ceo">
                            <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Dika.jpg')" }}></div>
                            <div className="org-info">
                                <h4>Dika</h4>
                                <span className="org-role">CEO</span>
                                <p className="org-desc">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>

                    <div className="org-connector"></div>

                    {/* Level 2 - Co-Founder */}
                    <div className="org-level org-level-single">
                        <div className="org-card">
                            <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Mahes.jpeg')" }}></div>
                            <div className="org-info">
                                <h4>Mahes Kanoko</h4>
                                <span className="org-role">Co-Founder & Tulung Web CEO</span>
                                <p className="org-desc">Integrasi produk digital & partnership</p>
                            </div>
                        </div>
                    </div>

                    <div className="org-connector"></div>

                    {/* Level 3 - Manajemen (Ketut) */}
                    <div className="org-level org-level-single">
                        <div className="org-card">
                            <div className="org-avatar org-avatar-initials" data-initials="KT"></div>
                            <div className="org-info">
                                <h4>Ketut</h4>
                                <span className="org-role">Manajemen</span>
                                <p className="org-desc">Operations Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="org-connector"></div>

                    {/* Level 4 - Admin WA Support */}
                    <div className="org-level org-level-group">
                        <div className="org-group-title">Admin WA Support</div>
                        <div className="org-group-cards">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/eka clarissa.png')" }}></div>
                                <div className="org-info">
                                    <h4>Eka Clarissa</h4>
                                    <span className="org-role">Lead Admin</span>
                                    <p className="org-desc">24 jam on · QC Team</p>
                                </div>
                            </div>
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Made candra.png')" }}></div>
                                <div className="org-info">
                                    <h4>Made Candra</h4>
                                    <span className="org-role">Admin Pagi</span>
                                    <p className="org-desc">Freelancer shift pagi</p>
                                </div>
                            </div>
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Kirana anggiswari.png')" }}></div>
                                <div className="org-info">
                                    <h4>Kirana Anggiswari</h4>
                                    <span className="org-role">Admin Siang</span>
                                    <p className="org-desc">Freelancer shift siang</p>
                                </div>
                            </div>
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Dimas.png')" }}></div>
                                <div className="org-info">
                                    <h4>Dimas</h4>
                                    <span className="org-role">Admin Malam</span>
                                    <p className="org-desc">Freelancer shift malam</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="org-connector"></div>

                    {/* Level 5 - Social Media Team */}
                    <div className="org-level org-level-group">
                        <div className="org-group-title">Social Media Team</div>
                        <div className="org-group-cards">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Diana.jpeg')" }}></div>
                                <div className="org-info">
                                    <h4>Budiana</h4>
                                    <span className="org-role">Head of Social Media</span>
                                    <p className="org-desc">Admin Instagram & TikTok</p>
                                </div>
                            </div>
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Pande.jpeg')" }}></div>
                                <div className="org-info">
                                    <h4>Pande Suardana</h4>
                                    <span className="org-role">Video & Motion</span>
                                    <p className="org-desc">Video · Animation · Editing</p>
                                </div>
                            </div>
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Amel.png')" }}></div>
                                <div className="org-info">
                                    <h4>Amel</h4>
                                    <span className="org-role">QC Social Media</span>
                                    <p className="org-desc">Checker sebelum konten tayang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
