"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export default function Location() {
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
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f5f3f3 0%, transparent 100%)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 32px', maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ width: 32, height: 1, background: 'var(--secondary)' }}></span>
              <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Catalogue Premium</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>
              Locations Diverses
            </h1>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: 16, maxWidth: 600 }}>
              Découvrez notre sélection de services sur-mesure et d'équipements de qualité pour sublimer votre séjour alpin.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          {/* Divider avec clé */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px 0' }}>
            <div style={{ flex: 1, borderTop: '1px solid rgba(197, 160, 89, 0.3)' }}></div>
            <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', margin: '0 16px' }}>key</span>
            <div style={{ flex: 1, borderTop: '1px solid rgba(197, 160, 89, 0.3)' }}></div>
          </div>
        </div>

        {/* Linge de Maison Section */}
        <section style={{ padding: '0 16px 48px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: 8 }}>Linge de Maison</h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>La douceur d'un linge immaculé pour un repos absolu.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {/* Draps Card */}
            <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, padding: 32, boxShadow: 'var(--shadow-luxury)', borderTop: '3px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'rgba(197, 160, 89, 0.2)', width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>bed</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 12 }}>Location de Draps</h3>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24, flex: 1 }}>
                Parures de lit complètes de qualité hôtelière. Coton percale frais et respirant, adapté à la température de nos montagnes.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--surface-variant)' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Sur devis</span>
              </div>
            </div>

            {/* Serviettes Card */}
            <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, padding: 32, boxShadow: 'var(--shadow-luxury)', borderTop: '3px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: 'rgba(197, 160, 89, 0.2)', width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>dry_cleaning</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 12 }}>Kit de Serviettes</h3>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24, flex: 1 }}>
                Ensemble de bain luxueux comprenant drap de bain, serviette de toilette et tapis de bain. Épaisseur et moelleux garantis.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--surface-variant)' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Sur devis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 768, margin: '0 auto', opacity: 0.5 }}>
          <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)' }}></div>
          <span className="material-symbols-outlined" style={{ color: 'var(--outline-variant)', margin: '0 16px', fontSize: 20 }}>landscape</span>
          <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)' }}></div>
        </div>

        {/* Kits de Bienvenue Section */}
        <section style={{ padding: '48px 16px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: 8 }}>
              Kits de Bienvenue
            </h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>L'attention aux détails dès votre arrivée.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {/* Alimentaire Card */}
            <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-luxury)', border: '1px solid var(--surface-variant)' }}>
              <div style={{ height: 200, background: 'var(--surface-variant)', position: 'relative' }}>
                <img 
                  src="/kit-alimentaire.jpg" 
                  alt="Produits locaux Alpine" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,5,19,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: 16, left: 24, display: 'flex', alignItems: 'center', gap: 8, color: 'white' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: 'FILL 1' }}>restaurant</span>
                  <h3 style={{ fontSize: '1.25rem' }}>Alimentaire</h3>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>
                  Découvrez les saveurs de Valfréjus. Avec notre kit de bienvenue, celui-ci peut être composé par vous-même chez Les Délices Alpins.
                </p>
              </div>
            </div>

            {/* Hygiène Card */}
            <div style={{ background: 'var(--surface-container-low)', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-luxury)', border: '1px solid var(--surface-variant)' }}>
              <div style={{ height: 200, background: 'var(--surface-variant)', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&h=400&fit=crop" 
                  alt="Produits d'hygiène" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,5,19,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: 16, left: 24, display: 'flex', alignItems: 'center', gap: 8, color: 'white' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: 'FILL 1' }}>cleaning_services</span>
                  <h3 style={{ fontSize: '1.25rem' }}>Hygiène</h3>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>
                  Kit d'entretien comprenant éponge, liquide vaisselle, pastilles lave-vaisselle et sacs poubelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 768, margin: '0 auto', opacity: 0.5 }}>
          <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)' }}></div>
          <span className="material-symbols-outlined" style={{ color: 'var(--outline-variant)', margin: '0 16px', fontSize: 20 }}>landscape</span>
          <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)' }}></div>
        </div>

        {/* Expertise Technique Section */}
        <section style={{ padding: '48px 16px 96px', maxWidth: 1280, margin: '0 auto' }}>
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

        <ContactCTA />
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
