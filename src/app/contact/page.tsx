"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <header className="navbar">
        <button className="mobile-menu-btn" onClick={() => setMobileNavOpen(true)}>
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>menu</span>
        </button>
        <Link href="/" className="navbar-logo"><img src="/logo.png" alt="Serenity Pro Appart" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} /><span>Serenity Pro Appart</span></Link>
        <div className="navbar-links">
          <Link href="/#services">Services</Link>
          <Link href="/#about">Lou</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="/contact" className="btn-primary">Nous contacter</Link>
      </header>

      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <h2>Serenity Pro Appart</h2>
            <button className="mobile-nav-close" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="mobile-nav-links">
            <Link href="/#services" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>Nos Services Exclusifs
            </Link>
            <Link href="#about" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">person</span>Lou
            </Link>
            <Link href="/contact" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">contact_support</span>Contact
            </Link>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '60px 16px', background: 'var(--surface)', textAlign: 'center' }}>
          <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Conciergerie de Luxe à Valfréjus
          </span>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '16px 0' }}>
            Contactez Lou
          </h1>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Une question sur nos services de gestion locative ou besoin d'une assistance personnalisée durant votre séjour ? Nous sommes à votre entière disposition.
          </p>
          <div className="gold-divider" style={{ margin: '24px auto' }}></div>
        </section>

        {/* Contact Content */}
        <section style={{ padding: '48px 16px', background: '#F2F5F7' }}>
          <div className="container" style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="contact-grid">
              {/* Form */}
              <div className="contact-form">
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 32 }}>Envoyez-nous un message</h2>
                {status === 'success' ? (
                  <div style={{ padding: 24, background: '#d4edda', borderRadius: 8, color: '#155724' }}>
                    <p>✅ Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>Nom complet</label>
                      <input 
                        type="text" 
                        placeholder="Jean Dupont" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid var(--outline-variant)', background: 'var(--surface-container)', outline: 'none' }} 
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>Email</label>
                      <input 
                        type="email" 
                        placeholder="jean@exemple.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid var(--outline-variant)', background: 'var(--surface-container)', outline: 'none' }} 
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>Objet</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid var(--outline-variant)', background: 'var(--surface-container)', outline: 'none' }}
                    >
                      <option value="">Sélectionner...</option>
                      <option value="Gestion locative">Gestion locative</option>
                      <option value="Services de conciergerie">Services de conciergerie</option>
                      <option value="Réservation">Réservation</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>Message</label>
                    <textarea 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid var(--outline-variant)', background: 'var(--surface-container)', outline: 'none', resize: 'vertical' }}
                    ></textarea>
                  </div>
                  {status === 'error' && (
                    <p style={{ color: 'red' }}>❌ Erreur lors de l'envoi. Veuillez réessayer.</p>
                  )}
                  <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
                  </button>
                </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="contact-sidebar">
                {/* Contact Card */}
                <div style={{ background: 'var(--primary)', padding: 32, borderRadius: 12, color: 'white', boxShadow: 'var(--shadow-luxury)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 24 }}>Coordonnées</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)', fontSize: 24 }}>location_on</span>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--secondary-fixed)', marginBottom: 4 }}>Adresse</p>
                        <p style={{ opacity: 0.9 }}>735 rue du cheval,<br/>73500 Valfréjus, France</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)', fontSize: 24 }}>phone_iphone</span>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--secondary-fixed)', marginBottom: 4 }}>Téléphone</p>
                        <p style={{ opacity: 0.9 }}>07.81.46.21.32</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)', fontSize: 24 }}>mail</span>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--secondary-fixed)', marginBottom: 4 }}>Email</p>
                        <p style={{ opacity: 0.9 }}>lesclesducharmaix@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div style={{ background: 'white', padding: 32, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 24 }}>Langues parlées</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontSize: '1.5rem' }}>🇫🇷</span>
                      <span style={{ fontWeight: 600 }}>Français</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontSize: '1.5rem' }}>🇬🇧</span>
                      <span style={{ fontWeight: 600 }}>English</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontSize: '1.5rem' }}>🇮🇹</span>
                      <span style={{ fontWeight: 600 }}>Italiano</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section style={{ padding: '80px 16px', background: 'var(--surface)' }}>
          <div className="container" style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: 8 }}>Nous trouver à Valfréjus</h2>
              <p style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>Au cœur des Alpes, entre authenticité et modernité.</p>
            </div>
            
            <div style={{ position: 'relative', height: 500, borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,30,66,0.15)', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB15ZLUqzlgEP4_anQpr7z_Gb5Ks145dU2SMiGO9CkAMYf1WpffcMeR1rR545zszWQq-mAzH93Zx4ib79gbDH_awJI93sRPIDLFpI9BN5ccCJMMNLQH1k3pR4m4-QGfz2JSKMsyKCVFQ9niWIGM1qqpRpTSFOmgcqorAgox93_XOqZQ55jFzT5jYSJzjvTbVHf6HmwGFxEBm1_mO50JM9App-s5dPdUwyUohBtjygcT4T0BP_l9Ec7QwJvKvSnwfFKbtNXJaXmcJro"
                alt="Carte Valfréjus"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
              {/* Marker */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ background: 'var(--primary)', color: 'white', padding: '8px 16px', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.3)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--secondary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>key</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Serenity Pro Appart</span>
                </div>
                <div style={{ width: 16, height: 16, background: 'var(--secondary)', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}></div>
              </div>

              {/* Location overlay */}
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, maxWidth: 320, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', padding: 20, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', border: '1px solid var(--outline-variant)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Accès Station</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 16 }}>Situé au pied des pistes, nous vous accueillons pour faciliter chaque instant de votre séjour.</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                  Ouvrir dans Google Maps
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 16px', background: 'var(--primary-container)', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: 24 }}>Confiez-nous vos clés, nous nous occupons du reste.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <button style={{ background: 'var(--secondary)', color: 'var(--on-secondary-fixed)', padding: '12px 32px', borderRadius: 8, fontWeight: 600, border: 'none', cursor: 'pointer', width: '100%', maxWidth: 250 }}>
                Demander un devis
              </button>
              <button style={{ background: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)', padding: '12px 32px', borderRadius: 8, fontWeight: 600, cursor: 'pointer', width: '100%', maxWidth: 250 }}>
                Appeler Lou
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Serenity Pro Appart</h4>
            <p>Votre partenaire confiance pour une expérience alpine d'exception à Valfréjus.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul className="footer-links">
              <li><a href="#">Mentions Légales</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Serenity Pro Appart by Lou. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
