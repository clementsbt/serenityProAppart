"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Cles() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img 
              src="/cles-hero.jpg" 
              alt="Luxury alpine resort interior" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, var(--surface) 40%, transparent 100%)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ width: 32, height: 1, background: 'var(--secondary)' }}></span>
              <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Premium Service</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>Gestion des clés</h1>
          </div>
        </section>

        {/* Service Content */}
        <section style={{ padding: '0 16px', marginTop: -16 }}>
          {/* Introduction Card */}
          <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-luxury)', borderTop: '3px solid var(--secondary)', position: 'relative', overflow: 'hidden', marginBottom: 24 }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--on-surface-variant)', marginBottom: 16 }}>
              Offrez à vos locataires une expérience d'accueil d'exception. Notre service de gestion des clés assure une fluidité totale de l'arrivée au départ.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderTop: '1px solid rgba(197, 160, 89, 0.1)', borderBottom: '1px solid rgba(197, 160, 89, 0.1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(197, 160, 89, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                <span className="material-symbols-outlined">key</span>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--primary)' }}> Sérénité Totale</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Présence locale à l'année à Valfréjus.</p>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div style={{ display: 'grid', gap: 16 }}>
            {/* Check-in & Out */}
            <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-luxury)', border: '1px solid rgba(197, 160, 89, 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>concierge</span>
                <span style={{ fontSize: '0.625rem', color: 'var(--on-surface-variant)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>01</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 8 }}>Check-in & Out</h3>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Gestion personnalisée des arrivées et départs. Remise des clés en main propre et présentation des lieux.</p>
            </div>

            {/* Contrôle Propriété */}
            <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-luxury)', border: '1px solid rgba(197, 160, 89, 0.05)', display: 'flex', gap: 16 }}>
              <div style={{ flexShrink: 0 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>inventory</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 4 }}>Contrôle Propriété</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Inspection rigoureuse de l'état du bien avant et après chaque séjour pour garantir votre tranquillité.</p>
              </div>
            </div>

            {/* Communication Voyageurs */}
            <div style={{ background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: 12, padding: 24, boxShadow: 'var(--shadow-luxury)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(197, 160, 89, 0) 0%, rgba(197, 160, 89, 0.1) 50%, rgba(197, 160, 89, 0) 100%)', backgroundSize: '200% 100%', animation: 'shimmer 3s infinite' }}></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary-fixed)' }}>support_agent</span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary-fixed)' }}>Communication Voyageurs</h3>
                </div>
                <p style={{ color: 'var(--primary-fixed)', fontSize: '0.875rem', opacity: 0.9 }}>
                  Assistance multilingue (FR/EN/IT) durant toute la durée du séjour. Nous sommes le point de contact privilégié pour vos locataires.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div style={{ padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, background: 'var(--surface-container-highest)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified</span>
                </div>
                <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Certifié</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, background: 'var(--surface-container-highest)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>location_on</span>
                </div>
                <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)' }}>Local</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, background: 'var(--surface-container-highest)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>schedule</span>
                </div>
                <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 700, color: 'var(--on-surface-variant)' }}>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div style={{ background: 'var(--surface-container-low)', borderRadius: 16, padding: 32, textAlign: 'center', border: '1px solid rgba(197, 160, 89, 0.1)', marginBottom: 32 }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 12 }}>Prêt à déléguer ?</h4>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: 24 }}>Libérez-vous des contraintes logistiques et maximisez vos revenus locatifs.</p>
            <Link href="/contact" style={{ display: 'block', width: '100%', padding: 16, background: 'var(--secondary)', color: 'white', fontWeight: 700, borderRadius: 8, marginBottom: 16 }}>
              Réserver ce service
            </Link>
            <Link href="/contact" style={{ display: 'inline-block', color: 'var(--secondary)', fontWeight: 600, fontSize: '0.875rem', borderBottom: '1px solid rgba(197, 160, 89, 0.3)' }}>
              En savoir plus sur nos tarifs
            </Link>
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

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
}
