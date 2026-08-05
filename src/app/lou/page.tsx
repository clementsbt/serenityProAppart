"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Lou() {
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
            <Link href="/lou" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">person</span>Lou
            </Link>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: 80 }}>
        <section className="page-hero">
          <div style={{ 
            width: 150, 
            height: 150, 
            borderRadius: '50%', 
            overflow: 'hidden',
            margin: '0 auto 20px',
            border: '4px solid white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="/lou.jpg" 
              alt="Lou" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h1>Lou</h1>
          <p>Votre interlocutrice privilégiée aux Clés du Charmaix</p>
        </section>

        <section className="section">
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: 16 }}>Passionnée par l'accueil</h2>
            <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.8 }}>
              Bonjour ! Je suis Lou, créatrice des Clés du Charmaix. 
              Arrivée à Valfréjus il y a plusieurs années, j'ai développé une vraie passion pour 
              l'accueil et la conciergerie de montagne.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.8 }}>
              Mon objectif : vous offrir un service personnalisé, chaleureux et professionnel 
              pour que votre séjour soit inoubliable.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8 }}>
              Je suis disponible 7j/7 pour répondre à vos besoins et vous guider 
              dans la découverte de notre belle région de Valfréjus.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/" style={{ color: 'var(--secondary)', fontWeight: 600 }}>← Retour au site</Link>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Me contacter</h2>
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
          <div>
            <h4>Serenity Pro Appart</h4>
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
