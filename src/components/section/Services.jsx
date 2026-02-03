
const Services = () => {
    const services = [
        {
            icon: "fas fa-pen-to-square",
            title: "Penulisan Tugas",
            desc: "Essai, makalah, laporan praktikum, hingga tugas akhir sesuai brief dan format kampus."
        },
        {
            icon: "fas fa-file-signature",
            title: "Pembuatan Proposal",
            desc: "Proposal bisnis, penelitian, atau acara lengkap dengan tabel anggaran dan timeline."
        },
        {
            icon: "fas fa-newspaper",
            title: "Artikel & Konten",
            desc: "Copy media sosial, artikel blog, dan caption promosi berbasis riset audiens."
        },
        {
            icon: "fas fa-file-pen",
            title: "Penyuntingan Dokumen",
            desc: "Proofreading, formatting, dan pengecekan plagiarisme sebelum dokumen dikirim."
        },
        {
            icon: "fas fa-chalkboard",
            title: "Slide Presentasi",
            desc: "Deck visual terstruktur untuk pitching, sidang, dan rapat penting."
        },
        {
            icon: "fas fa-paint-brush",
            title: "Desain Grafis",
            desc: "Poster, feed Instagram, banner promosi, dan kit branding ringan."
        },
        {
            icon: "fas fa-globe",
            title: "Website Sederhana",
            desc: "Landing page profil usaha dengan CTA WhatsApp untuk closing cepat."
        },
        {
            icon: "fas fa-table",
            title: "Manajemen Data",
            desc: "Rekap spreadsheet, dashboard ringan, dan template laporan otomatis."
        },
        {
            icon: "fas fa-comments",
            title: "Konsultasi & Brainstorm",
            desc: "Diskusi menentukan ide, outline tugas, atau strategi konten sebelum eksekusi."
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Layanan Kami</h2>
                    <p className="section-subtitle">Bantuan akademik dan digital yang bisa kamu pesan kapan saja</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="services-keywords">
                    <h3>Spesialis Jasa Joki & Pembuatan Tugas</h3>
                    <p>Kami siap bantu tugas individu maupun tim dengan standar joki tugas terpercaya di berbagai kota besar Indonesia. Tim lokal kami terbiasa menangani deadline ketat, revisi cepat, dan brief kompleks untuk mahasiswa Bali, Malang, Jakarta, Denpasar, hingga kota lainnya.</p>
                    <ul className="keyword-tags">
                        <li>Jasa joki tugas</li>
                        <li>Jasa buat tugas kuliah</li>
                        <li>Joki tugas terpercaya</li>
                        <li>Joki tugas di Bali</li>
                        <li>Joki tugas di Malang</li>
                        <li>Joki tugas di Jakarta</li>
                        <li>Joki tugas di Denpasar</li>
                        <li>Layanan pembuatan tugas</li>
                        <li>Konsultasi tugas profesional</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
