
const Reviews = () => {
    const reviews = [
        {
            name: "Nadia Putri",
            role: "Mahasiswi Ilmu Komunikasi",
            text: "\"Butuh slide presentasi dadakan, NgidihTulungID kelarin dalam 6 jam dengan desain rapi dan data lengkap. Tinggal presentasi tanpa drama!\""
        },
        {
            name: "Arif Wicaksono",
            role: "Supervisor Operasional",
            text: "\"Proposal tender yang mereka susun sangat tertata, lengkap dengan tabel biaya dan timeline. Pihak manajemen langsung acc karena tinggal revisi minor.\""
        },
        {
            name: "Maya Lestari",
            role: "Content Creator",
            text: "\"Artikel blog dan copy medsosnya tone-nya pas banget sama brandku. Revisi tinggal sedikit karena mereka sudah riset audience duluan.\""
        },
        {
            name: "Raka Pradana",
            role: "Pemilik UMKM Kuliner",
            text: "\"Landing page sederhana yang mereka buat bikin pelanggan bisa order via WA dengan mudah. Traffic dari Instagram langsung ke-filter rapi.\""
        },
        {
            name: "Sinta Aulia",
            role: "Koordinator Acara Kampus",
            text: "\"Dokumen proposal event disunting rapi, grammar diperbaiki, dan formatnya langsung siap cetak. Hemat waktu panitia banget.\""
        },
        {
            name: "Kevin Dharma",
            role: "Freelance Designer",
            text: "\"Sering outsourcing copy dan riset kecil ke NgidihTulungID. Outputnya konsisten, file tertata, jadi aku bisa fokus di visual saja.\""
        }
    ];

    return (
        <section id="reviews" className="reviews">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Review Pelanggan</h2>
                    <p className="section-subtitle">Cerita nyata dari pelanggan NgidihTulungID yang sudah merasakan layanan kami</p>
                </div>
                <div className="reviews-overview">
                    <div className="overview-stats">
                        <div className="overview-item">
                            <span className="overview-number">4.9</span>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                            </div>
                            <span className="overview-label">Rating Rata-rata</span>
                        </div>
                        <div className="overview-item">
                            <span className="overview-number">1000+</span>
                            <span className="overview-label">Tugas Selesai</span>
                        </div>
                        <div className="overview-item">
                            <span className="overview-number">98%</span>
                            <span className="overview-label">Kepuasan Klien</span>
                        </div>
                    </div>
                </div>
                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="reviewer-details">
                                        <h4>{review.name}</h4>
                                        <p>{review.role}</p>
                                    </div>
                                </div>
                                <div className="review-stars">
                                    {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                </div>
                            </div>
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
