"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

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
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', maxWidth: 500, lineHeight: 1.2 }}>Maintenance & Travaux d'appoint</h1>
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
                Chez Les Clés du Charmaix, nous savons que l'entretien d'une propriété en montagne nécessite une vigilance constante. Notre équipe de maintenance spécialisée assure la protection de votre investissement et le confort de vos résidents, 365 jours par an.
              </p>
              <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr' }}>
                <div style={{ padding: 24, background: 'var(--surface-container-low)', borderRadius: 8, borderLeft: '4px solid var(--secondary)' }}>
                  <h3 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 8, fontWeight: 600 }}>Maintenance Technique</h3>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Inspections régulières des systèmes de chauffage, plomberie et électricité pour prévenir les urgences hivernales.</p>
                </div>
                <div style={{ padding: 24, background: 'var(--surface-container-low)', borderRadius: 8, borderLeft: '4px solid var(--secondary)' }}>
                  <h3 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 8, fontWeight: 600 }}>Réparations Rapides</h3>
                  <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Intervention sur demande pour les petits problèmes - du remplacement de luminaire à l'ajustement de porte.</p>
                </div>
              </div>
            </div>

            {/* Value Preservation Card */}
            <div style={{ background: 'var(--primary)', color: 'white', padding: 32, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', position: 'relative', overflow: 'hidden', minHeight: 200 }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 16 }}>Valorisation du Bien</h3>
                <p style={{ opacity: 0.8, marginBottom: 24 }}>Suivi proactif des rénovation et améliorations esthétiques mineures pour maintenir votre propriété à sa valeur maximale.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 'auto' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>Focus Croissance des Actifs</span>
                </div>
              </div>
              <span className="material-symbols-outlined" style={{ position: 'absolute', right: -40, bottom: -40, fontSize: 200, opacity: 0.1 }}>architecture</span>
            </div>

            {/* CTA Section */}
            <div style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: 12, padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <img 
                    src="/lou.jpg" 
                    alt="Lou - Fondatrice" 
                    style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} 
                  />
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, background: '#22c55e', borderRadius: '50%', border: '2px solid white' }}></div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>Besoin d'assistance ?</h4>
                  <p style={{ color: 'var(--on-surface-variant)' }}>Lou est disponible pour les demandes personnalisées et interventions urgentes à Valfréjus.</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <Link href="/contact" style={{ padding: '12px 32px', background: 'var(--secondary)', color: 'white', borderRadius: 8, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined">chat</span>
                  Contacter Lou
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <a href="tel:+33781462132" style={{ padding: '12px 32px', border: '2px solid var(--secondary)', color: 'var(--secondary)', borderRadius: 8, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined">call</span>
                  07.81.46.21.32
                </a>
              </div>
            </div>

            {/* Features Micro-Cards */}
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div style={{ padding: 24, background: 'white', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>calendar_today</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Accès 365 Jours</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Disponibilité totale pour la maintenance technique critique.</p>
                </div>
              </div>
              <div style={{ padding: 24, background: 'white', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>handyman</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Partenaires de Confiance</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Coordination avec des artisans locaux certifiés pour les rénovations complexes.</p>
                </div>
              </div>
              <div style={{ padding: 24, background: 'white', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>receipt_long</span>
                <div>
                  <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Reporting Transparent</h5>
                  <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Rapports photo détaillés et factures numériques pour chaque intervention.</p>
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
