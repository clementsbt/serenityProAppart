"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Blanchisserie() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img 
              src="/blanchisserie-hero.jpg" 
              alt="Luxury mountain chalet bedroom with pristine white linens" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface) 0%, var(--surface) 40%, transparent 100%)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ width: 32, height: 1, background: 'var(--secondary)' }}></span>
              <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Premium Service</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>Ménage & Blanchisserie</h1>
          </div>
        </section>

        {/* Bento Grid */}
        <section style={{ padding: '0 16px', marginTop: -16, maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr' }}>
            
            {/* Ménage Hôtelier */}
            <div style={{ background: 'var(--surface-container-low)', padding: 32, borderRadius: 12, borderTop: '4px solid var(--secondary)', boxShadow: 'var(--shadow-luxury)' }}>
              <div style={{ background: 'rgba(0,5,19,0.05)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 24 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: 32 }}>cleaning_services</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16 }}>Ménage Hôtelier</h3>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>Nettoyage complet conforme aux standards de l'hôtellerie de luxe. Nous assurons une hygiène irréprochable pour chaque séjour.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--on-surface)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20 }}>check_circle</span>
                  <span>Désinfection approfondie</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--on-surface)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20 }}>check_circle</span>
                  <span>Vérification technique 20 points</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--on-surface)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20 }}>check_circle</span>
                  <span>Mise en place prestige</span>
                </li>
              </ul>
            </div>

            {/* Gestion du Linge */}
            <div style={{ background: 'var(--surface-container-low)', padding: 32, borderRadius: 12, borderTop: '4px solid var(--secondary)', boxShadow: 'var(--shadow-luxury)' }}>
              <div style={{ background: 'rgba(0,5,19,0.05)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 24 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: 32 }}>laundry</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16 }}>Gestion du Linge</h3>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>Un linge de haute qualité pour un confort optimal. Notre processus assure fraîcheur et douceur à vos convives.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                <span style={{ padding: '4px 12px', background: 'var(--surface-variant)', borderRadius: 20, fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Lavage</span>
                <span style={{ padding: '4px 12px', background: 'var(--surface-variant)', borderRadius: 20, fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Séchage</span>
                <span style={{ padding: '4px 12px', background: 'var(--surface-variant)', borderRadius: 20, fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Repassage</span>
              </div>
              <p style={{ fontWeight: 700, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined">verified</span>
                Coton égyptien & Traitement Bio
              </p>
            </div>

            {/* Kits de Bienvenue */}
            <div style={{ background: 'var(--primary)', color: 'white', padding: 32, borderRadius: 12, boxShadow: 'var(--shadow-luxury)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ background: 'rgba(255,255,255,0.1)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 24 }}>
                  <span className="material-symbols-outlined" style={{ color: 'white', fontSize: 32 }}>featured_seasonal_and_gifts</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 16 }}>Kits de Bienvenue</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>La petite attention qui fait la différence. Nos kits incluent des produits locaux et essentiels pour un accueil chaleureux.</p>
              </div>
              <div style={{ marginTop: 32, padding: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: 8 }}>Inclus dans le kit :</p>
                <p style={{ fontSize: '0.875rem' }}>Savons artisanaux, produits de première nécessité, guide de bienvenue personnalisé.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ marginTop: 64, background: 'var(--surface-container-high)', borderRadius: 16, padding: 48, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 24 }}>Prêt à sublimer vos locations ?</h2>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
                Confiez-nous l'entretien de votre propriété à Valfréjus et profitez d'une tranquillité d'esprit totale tout en garantissant des avis 5 étoiles de vos voyageurs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
                <Link href="/contact" style={{ padding: '16px 40px', background: 'var(--primary)', color: 'white', borderRadius: 8, fontWeight: 600, transition: 'all 0.2s' }}>
                  Réserver ce service
                </Link>
                <Link href="/contact" style={{ padding: '16px 40px', border: '2px solid var(--secondary)', color: 'var(--secondary)', borderRadius: 8, fontWeight: 600, transition: 'all 0.2s' }}>
                  Demander un devis
                </Link>
              </div>
            </div>
            <span className="material-symbols-outlined" style={{ position: 'absolute', right: -40, bottom: -40, fontSize: 200, color: 'var(--secondary)', opacity: 0.05, transform: 'rotate(12deg)' }}>cleaning_services</span>
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
