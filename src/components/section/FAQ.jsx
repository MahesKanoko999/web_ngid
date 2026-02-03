
const FAQ = () => {
    const faqs = [
        {
            q: "Apa saja layanan yang bisa saya pesan?",
            a: "Kamu bisa order penulisan tugas kuliah, proposal, artikel, editing dokumen, desain grafis, presentasi, website sederhana, hingga konsultasi strategi konten."
        },
        {
            q: "Berapa lama pengerjaan setiap project?",
            a: "Rata-rata pengerjaan 1-3 hari kerja tergantung kompleksitas. Untuk kebutuhan super cepat, kami punya admin 24/7 yang siap koordinasi pengerjaan ekspres."
        },
        {
            q: "Bagaimana cara order?",
            a: "Kamu bisa langsung isi form di bagian kontak atau klik tombol WhatsApp pada hero section. Sertakan detail tugas, deadline, dan preferensi format supaya tim kami bisa estimasi waktu serta biaya."
        },
        {
            q: "Apakah revisi dikenakan biaya?",
            a: "Setiap paket sudah termasuk revisi minor gratis selama masih sesuai brief awal. Untuk revisi mayor atau permintaan tambahan baru, kami akan konfirmasi biaya terlebih dahulu."
        },
        {
            q: "Apakah data saya aman?",
            a: "Ya, seluruh file dan percakapan pelanggan kami simpan di repositori internal dengan akses terbatas. Hanya tim yang menangani project kamu yang bisa melihat dokumen tersebut."
        }
    ];

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
                    <p className="section-subtitle">Jawaban cepat seputar layanan NgidihTulungID supaya kamu makin yakin</p>
                </div>
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h3>{faq.q}</h3>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
