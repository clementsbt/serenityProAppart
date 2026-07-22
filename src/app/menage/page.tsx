"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <button className="mobile-menu-btn" onClick={() => setMobileNavOpen(true)}>
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>menu</span>
        </button>
        <Link href="/" className="navbar-logo">Serenity Pro Appart</Link>
        <button className="btn-primary">Book Now</button>
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
          <span style={{ fontSize: '3rem', marginBottom: '10px' }}>🧹</span>
          <h1>Ménage</h1>
          <p>Service de nettoyage professionnel pour des locations impeccables.</p>
        </section>

        <section className="section">
          <div style={{ maxWidth: 800, margin: '0 auto', background: 'white', borderRadius: 16, padding: 32, boxShadow: 'var(--shadow-card)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: 16 }}>Nettoyage professionnel</h2>
            <p style={{ marginBottom: 16, color: 'var(--on-surface-variant)' }}>
              Un entretien professionnel rigoureux entre chaque location pour une higiene irréprochable 
              et un confort garanti pour vos voyageurs.
            </p>
            <h3 style={{ marginTop: 24, marginBottom: 12, color: 'var(--primary)' }}>Prestations :</h3>
            <ul style={{ marginLeft: 20, color: 'var(--on-surface-variant)' }}>
              <li>Nettoyage complet entre chaque location</li>
              <li>Nettoyage de fin de saison</li>
              <li>Nettoyage après départ tardif</li>
              <li>Change du linge de maison</li>
              <li>Vérification de l'état du logement</li>
            </ul>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/" style={{ color: 'var(--secondary)', fontWeight: 600 }}>← Retour au site</Link>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Besoin d'un ménage ?</h2>
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
