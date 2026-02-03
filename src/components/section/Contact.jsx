
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setNotification({ type: 'info', message: 'Mengirim pesan ke email kami...' });

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setNotification({ type: 'error', message: 'Format email tidak valid' });
            setIsLoading(false);
            return;
        }

        const data = new FormData();
        data.append('access_key', '432d24c1-5d0f-40b5-a1b5-e5899ab3d3fc');
        data.append('from_name', 'Website NgidihTulungID');
        data.append('subject', 'Pesan Baru dari Website NgidihTulungID');
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone || "Tidak dicantumkan");
        data.append('service', formData.service || "Tidak memilih layanan");
        data.append('message', formData.message);
        data.append('website', window.location.hostname || 'React App');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) throw new Error("Network response was not ok");
            const result = await response.json();

            if (result.success) {
                setNotification({ type: 'success', message: 'Pesan berhasil dikirim! Cek email untuk balasan dari kami.' });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                throw new Error(result.message);
            }

        } catch (error) {
            console.error(error);
            setNotification({ type: 'error', message: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.' });
        } finally {
            setIsLoading(false);
            // Hide notification after 5h
            setTimeout(() => setNotification(null), 5000);
        }
    };

    return (
        <section id="contact" className="contact">
            {notification && (
                <div className={`notification notification-${notification.type}`} style={{
                    position: 'fixed',
                    top: '100px',
                    right: '20px',
                    background: notification.type === 'success' ? '#4CAF50' : notification.type === 'error' ? '#f44336' : '#2196F3',
                    color: 'white',
                    padding: '1rem 1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    zIndex: 10000,
                    maxWidth: '400px',
                    animation: 'slideInRight 0.3s ease-out'
                }}>
                    <div className="notification-content">
                        <span className="notification-message">{notification.message}</span>
                        <button className="notification-close" onClick={() => setNotification(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Hubungi Kami</h2>
                    <p className="section-subtitle">Kirim keluhan atau kebutuhan kamu, tim NgidihTulungID siap baca 24/7</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Alamat</h4>
                                <p>Desa Buwit, Kecamatan Kediri<br />Kabupaten Tabanan, Bali</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Telepon</h4>
                                <p>+62 812-4638-9770</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>ngidihtulungid@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Jam Kerja</h4>
                                <p>Senin - Jumat: 06.00 - 02.00</p>
                                <p>Sabtu - Minggu: 08.00 - 12.00</p>
                                <p>Admin support: On 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group with-icon">
                                    <label htmlFor="name">Nama Lengkap</label>
                                    <span className="input-icon"><i className="fas fa-user"></i></span>
                                    <input type="text" id="name" name="name" placeholder="Masukkan nama kamu" required value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-group with-icon">
                                    <label htmlFor="email">Email</label>
                                    <span className="input-icon"><i className="fas fa-envelope"></i></span>
                                    <input type="email" id="email" name="email" placeholder="Email aktif untuk kami hubungi" required value={formData.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group with-icon">
                                    <label htmlFor="phone">Nomor WhatsApp</label>
                                    <span className="input-icon"><i className="fas fa-phone"></i></span>
                                    <input type="tel" id="phone" name="phone" placeholder="+62 xxxx" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Layanan yang Diminati</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                        <option value="">Pilih Layanan</option>
                                        <option value="penulisan-tugas">Penulisan Tugas</option>
                                        <option value="proposal">Pembuatan Proposal</option>
                                        <option value="artikel-konten">Artikel & Konten</option>
                                        <option value="penyuntingan-dokumen">Penyuntingan Dokumen</option>
                                        <option value="slide-presentasi">Slide Presentasi</option>
                                        <option value="desain-grafis">Desain Grafis</option>
                                        <option value="website-sederhana">Website Sederhana</option>
                                        <option value="manajemen-data">Manajemen Data</option>
                                        <option value="konsultasi-brainstorm">Konsultasi & Brainstorm</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group with-icon textarea-group">
                                <label htmlFor="message">Pesan / Keluhan</label>
                                <span className="input-icon"><i className="fas fa-comment-dots"></i></span>
                                <textarea id="message" name="message" rows="6" placeholder="Tulis detail tugas, keluhan, atau permintaan khusus agar tim kami bisa follow-up lebih cepat" required value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
                                <i className="fas fa-paper-plane"></i>
                                <span>{isLoading ? 'Mengirim...' : 'Kirim ke Email Kami'}</span>
                            </button>
                            <p className="contact-note">Form ini terhubung ke Web3Forms dan otomatis meneruskan pesan ke <strong>ngidihtulungid@gmail.com</strong>. Kami pantau 24/7 dan biasanya membalas jauh lebih cepat dari 1x24 jam.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
