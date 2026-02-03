
const Services = () => {
    const services = [
        {
            icon: "fas fa-pen-to-square",
            title: "Penulisan Tugas & Makalah",
            desc: "Solusi akademik lengkap mulai dari esai, paper, hingga jurnal. Format rapi sesuai panduan kampus.",
            size: "large"
        },
        {
            icon: "fas fa-globe",
            title: "Website Bisnis & Landing Page",
            desc: "Bikin usahamu 'Go Digital' dengan website portfolio atau toko online sederhana yang modern.",
            size: "large" // highlight web dev
        },
        {
            icon: "fas fa-file-signature",
            title: "Proposal Bisnis",
            desc: "Susun rencana bisnismu agar terlihat profesional di mata investor.",
            size: "medium"
        },
        {
            icon: "fas fa-newspaper",
            title: "Artikel & Copy",
            desc: "Konten SEO friendly untuk blog atau caption jualan.",
            size: "medium"
        },
        {
            icon: "fas fa-chalkboard",
            title: "Slide Presentasi",
            desc: "Desain PPT yang clean dan visual untuk pitching.",
            size: "small"
        },
        {
            icon: "fas fa-paint-brush",
            title: "Desain Grafis",
            desc: "Banner, poster, feed IG.",
            size: "small"
        },
        {
            icon: "fas fa-file-pen",
            title: "Proofreading",
            desc: "Cek typo dan grammar.",
            size: "small"
        },
        {
            icon: "fas fa-table",
            title: "Data Entry",
            desc: "Rekap data excel rapi.",
            size: "small"
        }
    ];

    return (
        <section id="services" className="services" style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Layanan Kami</h2>
                    <p className="section-subtitle">Apa pun kebutuhan digital & akademikmu, kami ada.</p>
                </div>
                <div className="bento-grid">
                    {services.map((service, index) => (
                        <div className={`bento-card ${service.size}`} key={index}>
                            <div className="bento-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
