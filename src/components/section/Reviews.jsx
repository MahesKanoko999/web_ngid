
// Custom CSS Marquee implementation

const Reviews = () => {
    const reviews = [
        {
            name: "Nadia Putri",
            role: "Mahasiswi Ilkom",
            text: "\"Slide presentasi dadakan selesai dalam 6 jam. Desainnya modern banget!\""
        },
        {
            name: "Arif Wicaksono",
            role: "Business Owner",
            text: "\"Proposal tender sangat rapi. Langsung deal sama klien besar.\""
        },
        {
            name: "Maya Lestari",
            role: "Content Creator",
            text: "\"Copywriting mereka pas banget sama tone brand aku. Engagement naik!\""
        },
        {
            name: "Kevin Dharma",
            role: "Freelancer",
            text: "\"Outsourcing tugas ke sini aman banget. Hasil selalu on-time.\""
        },
        {
            name: "Raka Pradana",
            role: "UMKM Kuliner",
            text: "\"Website landing page simpel tapi konversinya tinggi via WA.\""
        }
    ];

    return (
        <section id="reviews" className="reviews" style={{ padding: '100px 0', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-title">Happy Clients</h2>
                <p className="section-subtitle">Mereka yang sudah terbantu oleh NgidihTulungID</p>
            </div>

            <div className="reviews-marquee-container">
                {/* Duplicate content to ensure smooth loop if width is large */}
                <div className="marquee-track">
                    {[...reviews, ...reviews, ...reviews].map((review, index) => (
                        <div className="marquee-card" key={index}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', background: '#87ceeb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3c72', fontWeight: 'bold' }}>
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, color: '#fff' }}>{review.name}</h4>
                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{review.role}</span>
                                </div>
                            </div>
                            <p style={{ fontStyle: 'italic', color: '#e2e8f0' }}>"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
