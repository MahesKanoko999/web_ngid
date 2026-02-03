
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
                    <div className="org-level org-level-1">
                        <div className="org-card org-ceo">
                            <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Dika.jpg')" }}></div>
                            <div className="org-info">
                                <h4>Dika</h4>
                                <span className="org-role">CEO</span>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="org-connector org-connector-main"></div>

                    {/* Level 2 - Co-Founder */}
                    <div className="org-level org-level-2">
                        <div className="org-branch">
                            <div className="org-card">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Mahes.jpeg')" }}></div>
                                <div className="org-info">
                                    <h4>Mahes Kanoko</h4>
                                    <span className="org-role">Co-Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="org-connector"></div>

                    {/* Level 3 - Lead Admin */}
                    <div className="org-level org-level-3">
                        <div className="org-branch">
                            <div className="org-card">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/eka clarissa.png')" }}></div>
                                <div className="org-info">
                                    <h4>Eka Clarissa</h4>
                                    <span className="org-role">Lead Admin</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="org-connector"></div>

                    {/* Level 4 - Head of Social Media */}
                    <div className="org-level org-level-4">
                        <div className="org-branch">
                            <div className="org-card">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Diana.jpeg')" }}></div>
                                <div className="org-info">
                                    <h4>Budiana</h4>
                                    <span className="org-role">Head of Social Media</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="org-connector"></div>

                    {/* Level 5 - Admin Team */}
                    <div className="org-level org-level-5">
                        <div className="org-branch">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Made candra.png')" }}></div>
                                <div className="org-info">
                                    <h4>Made Candra</h4>
                                    <span className="org-role">Admin Pagi</span>
                                </div>
                            </div>
                        </div>
                        <div className="org-branch">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Kirana anggiswari.png')" }}></div>
                                <div className="org-info">
                                    <h4>Kirana Anggiswari</h4>
                                    <span className="org-role">Admin Siang</span>
                                </div>
                            </div>
                        </div>
                        <div className="org-branch">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Dimas.png')" }}></div>
                                <div className="org-info">
                                    <h4>Dimas</h4>
                                    <span className="org-role">Admin Malam</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="org-connector"></div>

                    {/* Level 6 - Specialists */}
                    <div className="org-level org-level-6">
                        <div className="org-branch">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Pande.jpeg')" }}></div>
                                <div className="org-info">
                                    <h4>Pande Suardana</h4>
                                    <span className="org-role">Video & Motion</span>
                                </div>
                            </div>
                        </div>
                        <div className="org-branch">
                            <div className="org-card org-card-small">
                                <div className="org-avatar" style={{ backgroundImage: "url('/assets/img/Amel.png')" }}></div>
                                <div className="org-info">
                                    <h4>Amel</h4>
                                    <span className="org-role">QC Social Media</span>
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
