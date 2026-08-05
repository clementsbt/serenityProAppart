"use client";

import fr from "../fr.json";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export default function Travaux() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img
              src="/travaux-hero.jpg"
              alt="Valfréjus ski resort at dusk"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, var(--surface) 40%, transparent 100%)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.2)', padding: '4px 12px', borderRadius: 20, color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>verified</span>
                {fr.travaux.heroTag}
              </span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', maxWidth: 500, lineHeight: 1.2 }}>{fr.travaux.heroTitle}</h1>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '32px 16px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr' }}>

            {/* Services Grid - Responsive */}
            <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {/* Gros Travaux */}
              <div className="card-hover" style={{ background: '#ffffff', borderRadius: 12, padding: 40, boxShadow: '0 10px 20px -5px rgba(0, 30, 66, 0.08)', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--primary)' }}>architecture</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.travaux.card1Title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.6 }}>
                  {fr.travaux.card1Desc}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20, marginTop: 2 }}>check_circle</span>
                    {fr.travaux.card1Feature1}
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20, marginTop: 2 }}>check_circle</span>
                    {fr.travaux.card1Feature2}
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20, marginTop: 2 }}>check_circle</span>
                    {fr.travaux.card1Feature3}
                  </li>
                </ul>
              </div>

              {/* Réparations Rapides */}
              <div className="card-hover" style={{ background: '#ffffff', borderRadius: 12, padding: 40, boxShadow: '0 10px 20px -5px rgba(0, 30, 66, 0.08)', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
                <div style={{ width: 64, height: 64, background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--primary)' }}>handyman</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.travaux.card2Title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.6 }}>
                  {fr.travaux.card2Desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Électricité mineure</span>
                  <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Plomberie d'urgence</span>
                  <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Menuiserie</span>
                  <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Ajustements divers</span>
                </div>
              </div>
            </div>

            {/* Expertise Technique Section */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 768, margin: '0 auto', opacity: 0.5, padding: '48px 0' }}>
              <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)' }}></div>
              <span className="material-symbols-outlined" style={{ color: 'var(--outline-variant)', margin: '0 16px', fontSize: 20 }}>landscape</span>
              <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)' }}></div>
            </div>

            <section style={{ padding: '48px 16px', maxWidth: 1280, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: 8 }}>{fr.travaux.expertiseTitle}</h2>
                <p style={{ color: 'var(--on-surface-variant)' }}>{fr.travaux.expertiseSubtitle}</p>
              </div>

              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-luxury)', display: 'grid', gridTemplateColumns: '1fr' }}>
                {/* Left column - dark */}
                <div style={{ background: 'var(--primary)', padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 48, marginBottom: 24 }}>engineering</span>
                  <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.travaux.expertiseSectionTitle}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                    {fr.travaux.expertiseSectionDesc}
                  </p>
                </div>

                {/* Right column - light with 2x2 grid */}
                <div style={{ background: 'var(--surface-container-low)', padding: '32px 24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
                    {/* Chauffage */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>thermostat</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{fr.travaux.feature1Title}</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{fr.travaux.feature1Desc}</p>
                      </div>
                    </div>
                    {/* Plomberie */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>water_drop</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{fr.travaux.feature2Title}</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{fr.travaux.feature2Desc}</p>
                      </div>
                    </div>
                    {/* Electricité */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>bolt</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{fr.travaux.feature3Title}</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{fr.travaux.feature3Desc}</p>
                      </div>
                    </div>
                    {/* Wifi */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>wifi</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{fr.travaux.feature4Title}</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>{fr.travaux.feature4Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Micro-Cards */}
            <ContactCTA />

            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: 48 }}>
              <div style={{ padding: 24, background: '#F4F1EA', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>calendar_today</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>{fr.travaux.micro1Title}</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>{fr.travaux.micro1Desc}</p>
                </div>
              </div>
              <div style={{ padding: 24, background: '#F4F1EA', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>handyman</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>{fr.travaux.micro2Title}</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>{fr.travaux.micro2Desc}</p>
                </div>
              </div>
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
