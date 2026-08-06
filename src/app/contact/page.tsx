"use client";

import { useLanguage } from "@/context/LanguageContext";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const { t: fr } = useLanguage();
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
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '60px 16px', background: 'var(--surface)', textAlign: 'center' }}>
          <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {fr.contact.heroTag}
          </span>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: '16px 0' }}>
            {fr.contact.heroTitle}
          </h1>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            {fr.contact.heroSubtitle}
          </p>
          <div className="gold-divider" style={{ margin: '24px auto' }}></div>
        </section>

        {/* Contact Content */}
        <section style={{ padding: '48px 16px', background: '#F2F5F7' }}>
          <div className="container" style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="contact-grid-4">
              {/* Form */}
              <div className="contact-form">
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 32 }}>{fr.contact.formTitle}</h2>
                {status === 'success' ? (
                  <div style={{ padding: 24, background: '#d4edda', borderRadius: 8, color: '#155724' }}>
                    <p>✅ Message envoyé avec succès ! Nous vous répondrons rapidement.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div className="form-row">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>{fr.contact.formName}</label>
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
                        <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>{fr.contact.formEmail}</label>
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
                      <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>{fr.contact.formSubject}</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid var(--outline-variant)', background: 'var(--surface-container)', outline: 'none' }}
                      >
                        <option value="">{fr.contact.formSelectPlaceholder}</option>
                        <option value="Gestion locative">{fr.contact.formSubject1}</option>
                        <option value="Services de conciergerie">{fr.contact.formSubject2}</option>
                        <option value="Réservation">{fr.contact.formSubject3}</option>
                        <option value="Autre demande">{fr.contact.formSubject4}</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: 8 }}>{fr.contact.formMessage}</label>
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
                      {status === 'loading' ? fr.contact.sending : fr.contact.formButton}
                    </button>
                  </form>
                )}
              </div>

              {/* Horaires */}
              <div className="card card-hover">
                <div style={{ background: '#F4F1EA', padding: 32, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', border: '1px solid rgba(197, 160, 89, 0.3)', height: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 24 }}>{fr.contact.scheduleTitle}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.monday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.tuesday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.wednesday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.thursday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.friday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.saturday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span style={{ fontWeight: 500 }}>{fr.contact.sunday}</span>
                      <span style={{ color: 'var(--on-surface-variant)' }}>9h - 21h <span style={{ opacity: 0.6 }}>(9am - 9pm)</span></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coordonnées */}
              <div className="card card-hover">
                <div style={{ background: '#F4F1EA', padding: 32, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', border: '1px solid rgba(197, 160, 89, 0.3)', height: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 24 }}>{fr.contact.contactTitle}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 24 }}>location_on</span>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{fr.contact.addressLabel}</p>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>735 rue du cheval, 73500 Valfréjus</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 24 }}>phone_iphone</span>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{fr.contact.phoneLabel}</p>
                        <a href="tel:+33781462132" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }}>07.81.46.21.32</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 24 }}>mail</span>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{fr.contact.emailLabel}</p>
                        <a href="mailto:lesclesducharmaix@gmail.com" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }}>lesclesducharmaix@gmail.com</a>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: 'var(--surface-container)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#C5A059"/>
                        </svg>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{fr.contact.instagramLabel}</p>
                        <a href="https://www.instagram.com/serenityproappart/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: '0.875rem' }}>@serenityproappart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Langues parlées */}
              <div className="card card-hover">
                <div style={{ background: '#F4F1EA', padding: 32, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', border: '1px solid rgba(197, 160, 89, 0.3)', height: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 24 }}>{fr.contact.languagesTitle}</h3>
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
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: 8 }}>{fr.contact.mapTitle}</h2>
              <p style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic' }}>Au cœur des Alpes, entre authenticité et modernité.</p>
            </div>
            
            <div style={{ position: 'relative', height: 500, borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,30,66,0.15)', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.415858857619!2f6.652088099608348!3d45.17376084051724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47898dfaf4921589%3A0xf5386ff56065a560!2s735%20Rue%20du%20Cheval-Blanc%2C%2073500%20Modane!5e0!3m2!1sfr!2sfr!4v1784733236523!5m2!1sfr!2sfr"
                width="100%" 
                height="100%" 
                style={{ border: 0, width: '100%', height: '500px' }}
                allowFullScreen 
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="735 rue du Cheval-Blanc, 73500 Modane"
              ></iframe>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>{fr.common.siteName}</h4>
            <p>Votre partenaire confiance pour une expérience alpine d'exception à Valfréjus.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/cles">Gestion clés</a></li>
              <li><a href="/location">Location</a></li>
              <li><a href="/menage">Ménage</a></li>
              <li><a href="/travaux">Travaux</a></li>
              <li><a href="/tarifs">Tarifs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul className="footer-links">
              <li><a href="/mentions-legales">Mentions Légales</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Serenity Pro Appart by Lou. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
