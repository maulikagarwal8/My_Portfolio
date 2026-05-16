import { useState } from 'react';
import { Mail, MapPin, Send, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: '', error: '' });
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ loading: false, success: 'Message sent! I\'ll get back to you soon.', error: '' });
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => { setStatus(prev => ({ ...prev, success: '' })); }, 8000);
      } else {
        setStatus({ loading: false, success: '', error: data.message || 'Something went wrong.' });
        setTimeout(() => { setStatus(prev => ({ ...prev, error: '' })); }, 8000);
      }
    } catch {
      setStatus({ loading: false, success: '', error: 'Could not connect to server. Please try again.' });
      setTimeout(() => { setStatus(prev => ({ ...prev, error: '' })); }, 8000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-6xl">
        <div className="section-header animate-fade-up">
          <h1 className="title-large">Get In Touch</h1>
          <div className="header-line" />
        </div>

        <div className="contact-grid">
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-heading" style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Let's talk about the next project.
            </h3>
            <p className="text-body" style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
              I'm currently seeking projects to collaborate and open to new opportunities.<br />
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>

            <a href="mailto:maulikagarwal8024@gmail.com" className="contact-method" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
              <div className="contact-card-icon">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <span className="label-text" style={{ marginBottom: '0.25rem', opacity: 0.7 }}>Email</span>
                <span className="text-heading" style={{ fontFamily: 'monospace', fontWeight: '500', marginLeft: '0' }}>maulikagarwal8024@gmail.com</span>
              </div>
            </a>

            <div className="pt-2" style={{ marginTop: '2.5rem' }}>
              <h4 className="label-text" style={{ opacity: 0.7, marginBottom: '1rem', marginLeft: '1rem' }}>Connect Professionally</h4>
              <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
                <a href="https://github.com/maulikagarwal8" target="_blank" className="social-circle" aria-label="GitHub">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/maulik-agarwal-039b73297/" target="_blank" className="social-circle" aria-label="LinkedIn">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="form-group">
              <label htmlFor="name" className="label-text">Full Name</label>
              <input id="name" type="text" name="name" placeholder='Your Name' value={form.name} onChange={handleChange}
                disabled={status.loading} required className="input-field" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="label-text">Email Address</label>
              <input id="email" type="email" name="email" placeholder='Your Email' value={form.email} onChange={handleChange}
                disabled={status.loading} required className="input-field" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="label-text">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder='Your Message' value={form.message} onChange={handleChange}
                disabled={status.loading} required className="input-field" style={{ resize: 'none' }} />
            </div>

            {status.success && (
              <div className="status-banner status-success">
                <CheckCircle size={18} /> <span>{status.success}</span>
              </div>
            )}
            {status.error && (
              <div className="status-banner status-error">
                <AlertCircle size={18} /> <span>{status.error}</span>
              </div>
            )}

            <button type="submit" disabled={status.loading} className="btn btn-primary"
              style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem' }}>
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}