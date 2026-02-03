
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
        setNotification({ type: 'info', message: 'Sending...' });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setNotification({ type: 'error', message: 'Invalid email' });
            setIsLoading(false);
            return;
        }

        const data = new FormData();
        data.append('access_key', '432d24c1-5d0f-40b5-a1b5-e5899ab3d3fc');
        data.append('from_name', 'WEBSITE NGID (New Design)');
        data.append('subject', 'New Message');
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone || "-");
        data.append('service', formData.service || "-");
        data.append('message', formData.message);

        try {
            const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
            const result = await response.json();
            if (result.success) {
                setNotification({ type: 'success', message: 'Message sent!' });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            setNotification({ type: 'error', message: 'Failed to send' });
        } finally {
            setIsLoading(false);
            setTimeout(() => setNotification(null), 5000);
        }
    };

    return (
        <section id="contact" style={{ padding: '100px 0' }}>
            <div className="container">
                {notification && (
                    <div style={{
                        position: 'fixed', top: '100px', right: '20px', zIndex: 2000,
                        background: notification.type === 'success' ? '#10b981' : '#ef4444',
                        padding: '1rem 2rem', borderRadius: '12px', color: 'white'
                    }}>
                        {notification.message}
                    </div>
                )}

                <div className="contact-split">
                    <div className="contact-left">
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>Let's Talk Business.</h2>
                        <p style={{ marginBottom: '3rem' }}>Ceritakan kebutuhanmu, kami akan berikan solusi terbaik.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)' }}>WhatsApp</h4>
                                <p>+62 812-4638-9770</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)' }}>Email</h4>
                                <p>ngidihtulungid@gmail.com</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--accent-cyan)' }}>Office</h4>
                                <p>Desa Buwit, Tabanan, Bali</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)' }}>Name</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" style={{ width: '100%' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)' }}>Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" style={{ width: '100%' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)' }}>Service</label>
                                <select name="service" value={formData.service} onChange={handleChange} style={{ width: '100%' }}>
                                    <option value="">Select Option</option>
                                    <option value="tugas">Tugas Akademik</option>
                                    <option value="website">Website Development</option>
                                    <option value="design">Graphic Design</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)' }}>Message</label>
                                <textarea name="message" rows="4" required value={formData.message} onChange={handleChange} placeholder="Tell us more..." style={{ width: '100%' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: '12px', padding: '1rem' }}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
