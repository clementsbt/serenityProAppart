"use client";

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
                Professional Excellence
              </span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', maxWidth: 500, lineHeight: 1.2 }}>Gros travaux / rénovation et Réparation rapides</h1>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '32px 16px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr' }}>
            
            {/* Main Description Card */}
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, padding: 32, boxShadow: 'var(--shadow-luxury)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 8, background: 'var(--primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--on-primary-container)' }}>build</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>Reliable Property Care</h2>
              </div>
              <p style={{ fontSize: '1.125rem', color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.7 }}>
                Chez Serenity pro appart, nous savons que l'entretien d'une propriété en montagne nécessite une vigilance constante. Notre équipe de maintenance spécialisée assure la protection de votre investissement et le confort de vos résidents, 365 jours par an.
              </p>
              <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr' }}>
                <div style={{ padding: 24, background: 'var(--surface-container-low)', borderRadius: 8, borderLeft: '4px solid var(--secondary)' }}>
                  <h3 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 8, fontWeight: 600 }}>Gros travaux et rénovation</h3>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Chez Serenity pro appart, nous pouvons vous mettre en relation avec les meilleurs artisans de la région.</p>
                </div>
                <div style={{ padding: 24, background: 'var(--surface-container-low)', borderRadius: 8, borderLeft: '4px solid var(--secondary)' }}>
                  <h3 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 8, fontWeight: 600 }}>Réparations Rapides</h3>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Intervention sur demande pour les petits problèmes - du remplacement de luminaire à l'ajustement de porte.</p>
                </div>
              </div>
            </div>

            <ContactCTA />

            {/* Features Micro-Cards */}
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div style={{ padding: 24, background: '#F4F1EA', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>calendar_today</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Accès 365 Jours</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Disponibilité totale pour la maintenance technique critique.</p>
                </div>
              </div>
              <div style={{ padding: 24, background: '#F4F1EA', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>handyman</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Partenaires de Confiance</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Coordination avec des artisans locaux certifiés pour les rénovations complexes.</p>
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
                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: 8 }}>Expertise Technique</h2>
                <p style={{ color: 'var(--on-surface-variant)' }}>La tranquillité d'esprit garantie par nos professionnels.</p>
              </div>
              
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-luxury)', display: 'grid', gridTemplateColumns: '1fr' }}>
                {/* Left column - dark */}
                <div style={{ background: 'var(--primary)', padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 48, marginBottom: 24 }}>engineering</span>
                  <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Vérification Technique</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                    Un contrôle rigoureux avant, pendant ou après le séjour de vos locataires pour assurer le parfait état de marche de l'ensemble des installations de votre bien immobilier.
                  </p>
                </div>
                
                {/* Right column - light with 2x2 grid */}
                <div style={{ background: 'var(--surface-container-low)', padding: '32px 24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
                    {/* Chauffage */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>thermostat</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Chauffage &amp; Climatisation</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Contrôle des températures et purge des radiateurs.</p>
                      </div>
                    </div>
                    {/* Plomberie */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>water_drop</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Plomberie &amp; Sanitaires</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Vérification des fuites, pression d'eau et chauffe-eau.</p>
                      </div>
                    </div>
                    {/* Electricité */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>bolt</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Systèmes Électriques</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Tests des disjoncteurs, éclairages et appareils électroménagers.</p>
                      </div>
                    </div>
                    {/* Wifi */}
                    <div style={{ display: 'flex', gap: 16 }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>wifi</span>
                      <div>
                        <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Connectivité</h4>
                        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Diagnostic réseau internet et équipements connectés.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            

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
