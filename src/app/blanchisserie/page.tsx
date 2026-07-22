"use client";

import { useState } from "react";
import Link from "next/link";

export default function Blanchisserie() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <button className="mobile-menu-btn" onClick={() => setMobileNavOpen(true)}>
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>menu</span>
        </button>
        <Link href="/" className="navbar-logo"><img src="/logo.png" alt="Serenity Pro Appart" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} /><span>Serenity Pro Appart</span></Link>
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
            <Link href="/services" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>Services
            </Link>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: 80 }}>
        <section className="page-hero">
          <span style={{ fontSize: '3rem', marginBottom: '10px' }}>👕</span>
          <h1>Blanchisserie</h1>
          <p>Linge de maison haut de gamme pour vos locations.</p>
        </section>

        <section className="section">
          <div style={{ maxWidth: 800, margin: '0 auto', background: 'white', borderRadius: 16, padding: 32, boxShadow: 'var(--shadow-card)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: 16 }}>Linge de qualité hotelière</h2>
            <p style={{ marginBottom: 16, color: 'var(--on-surface-variant)' }}>
              Location et entretien de linge de maison haut de gamme. Nous fournissons et entretenons 
              draps, serviettes et kits de bienvenue pour un confort absolu.
            </p>
            <h3 style={{ marginTop: 24, marginBottom: 12, color: 'var(--primary)' }}>Services :</h3>
            <ul style={{ marginLeft: 20, color: 'var(--on-surface-variant)' }}>
              <li>Location de draps (lit simple/double)</li>
              <li>Location de serviettes</li>
              <li>Kit de bienvenue personnalisé</li>
              <li>Lavage, séchage et repassage</li>
              <li>Change entre chaque location</li>
            </ul>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/" style={{ color: 'var(--secondary)', fontWeight: 600 }}>← Retour au site</Link>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Devis blanchisserie</h2>
            <div className="cta-buttons">
              <a href="mailto:lesclesducharmaix@gmail.com" className="cta-btn primary">
                <span className="material-symbols-outlined">mail</span>Email
              </a>
              <a href="tel:+33781462132" className="cta-btn secondary">
                <span className="material-symbols-outlined">call</span>+33 7 81 46 21 32
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div><h4>Serenity Pro Appart</h4><p>Conciergerie de Luxe à Valfréjus.</p></div>
        </div>
      </footer>
    </>
  );
}
