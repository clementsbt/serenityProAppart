"use client";

import { useState } from "react";
import Link from "next/link";

export default function Cles() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileNavOpen(true)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>menu</span>
        </button>
        <Link href="/" className="navbar-logo">Les Clés du Charmaix</Link>
        <button className="btn-primary">Book Now</button>
      </header>

      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <h2>Les Clés du Charmaix</h2>
            <button className="mobile-nav-close" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="mobile-nav-links">
            <Link href="/services" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>Services
            </Link>
            <Link href="/locations" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">mountain_flag</span>Locations
            </Link>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: 80 }}>
        <section className="page-hero">
          <span style={{ fontSize: '3rem', marginBottom: '10px' }}>🔑</span>
          <h1>Gestion des clés</h1>
          <p>Accueil personnalisé des voyageurs et remise des clés lors des arrivées et départs.</p>
        </section>

        <section className="section">
          <div className="cles-card" style={{ maxWidth: 800, margin: '0 auto', background: 'white', borderRadius: 16, padding: 32, boxShadow: 'var(--shadow-card)' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: 16 }}>Service d'accueil</h2>
            <p style={{ marginBottom: 16, color: 'var(--on-surface-variant)' }}>
              Nous assurons une arrivée fluide et professionnelle pour vos locataires. 
              Accueil physique, remise des clés en main propre et présentation complète du logement.
            </p>
            <h3 style={{ marginTop: 24, marginBottom: 12, color: 'var(--primary)' }}>Services inclus :</h3>
            <ul style={{ marginLeft: 20, color: 'var(--on-surface-variant)' }}>
              <li>Remise des clés en main propre</li>
              <li>État des lieux d'entrée</li>
              <li>Présentation du logement et des équipements</li>
              <li>Explication des consignes de sécurité</li>
              <li>État des lieux de sortie</li>
              <li>Remise des clés au départ</li>
            </ul>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
              ← Retour au site
            </Link>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Prêt à réservater ?</h2>
            <p>Contactez-nous pour organizer l'accueil de vos voyageurs.</p>
            <div className="cta-buttons">
              <a href="mailto:lesclesducharmaix@gmail.com" className="cta-btn primary">
                <span className="material-symbols-outlined">mail</span>
                Email
              </a>
              <a href="tel:+33781462132" className="cta-btn secondary">
                <span className="material-symbols-outlined">call</span>
                +33 7 81 46 21 32
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Les Clés du Charmaix</h4>
            <p>Conciergerie de Luxe à Valfréjus.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📍 735 rue du Cheval, 73500 Valfréjus</p>
          </div>
        </div>
      </footer>
    </>
  );
}
