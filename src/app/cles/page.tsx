"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

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
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f5f3f3 0%, transparent 100%)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 32px', maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ width: 32, height: 1, background: 'var(--secondary)' }}></span>
              <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Premium Service</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>
              Gestion des clés
            </h1>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: 16, maxWidth: 600 }}>
              Offrez à vos locataires une expérience d'accueil d'exception. Notre service de gestion des clés assure une fluidité totale de l'arrivée au départ.
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

        {/* Services Grid */}
        <section style={{ padding: '0 16px 48px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {/* Card 1 - Check-out */}
            <div className="card-hover" style={{ background: '#ffffff', borderRadius: 12, padding: 40, boxShadow: '0 10px 20px -5px rgba(0, 30, 66, 0.08)', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
              <div style={{ width: 64, height: 64, background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--primary)' }}>concierge</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Check-out physiques</h3>
              <p style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.6 }}>
                Accueil physique personnalisé pour vos locataires. Remise des clés en main propre et consignes de sécurité pour une expérience sereine dès l'arrivée.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20, marginTop: 2 }}>check_circle</span>
                  Remise des clés en main propre
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20, marginTop: 2 }}>check_circle</span>
                  Consignes de sécurité personnalisées
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 20, marginTop: 2 }}>check_circle</span>
                  Présentation des équipements
                </li>
              </ul>
            </div>

            {/* Card 2 - Contrôle */}
            <div className="card-hover" style={{ background: '#ffffff', borderRadius: 12, padding: 40, boxShadow: '0 10px 20px -5px rgba(0, 30, 66, 0.08)', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
              <div style={{ width: 64, height: 64, background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--primary)' }}>inventory</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Contrôle Propreté</h3>
              <p style={{ fontSize: '1rem', color: 'var(--on-surface-variant)', marginBottom: 24, lineHeight: 1.6 }}>
                Inspection rigoureuse de l'état du bien avant et après chaque séjour pour garantir votre tranquillité.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>État des lieux</span>
                <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Inventaire</span>
                <span style={{ background: 'var(--surface-container)', padding: '8px 16px', borderRadius: 20, fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Rapport photo</span>
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

        {/* Communication Section */}
        <section style={{ padding: '48px 16px 96px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: 8 }}>Communication Voyageurs</h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>Un contact privilégié tout au long du séjour.</p>
          </div>
          
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-luxury)', display: 'grid', gridTemplateColumns: '1fr' }}>
            {/* Left column - dark */}
            <div style={{ background: 'var(--primary)', padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 48, marginBottom: 24 }}>support_agent</span>
              <h3 style={{ fontSize: '1.75rem', color: 'white', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Assistance Multilingue</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Nous sommes le point de contact privilégié pour vos locataires durant toute la durée du séjour. Assistance en français, anglais et italien.
              </p>
            </div>
            
            {/* Right column - light with 2x2 grid */}
            <div style={{ background: 'var(--surface-container-low)', padding: '32px 24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
                {/* Arrivée */}
                <div style={{ display: 'flex', gap: 16 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>flight_takeoff</span>
                  <div>
                    <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Arrivée</h4>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Accueil personnalisé et remise des clés.</p>
                  </div>
                </div>
                {/* Départ */}
                <div style={{ display: 'flex', gap: 16 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>flight_land</span>
                  <div>
                    <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Départ</h4>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>État des lieux et récupération des clés.</p>
                  </div>
                </div>
                {/* Support */}
                <div style={{ display: 'flex', gap: 16 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>chat</span>
                  <div>
                    <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Support 7/7</h4>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Disponibilité pour toute question ou problème.</p>
                  </div>
                </div>
                {/* Local */}
                <div style={{ display: 'flex', gap: 16 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 28 }}>location_on</span>
                  <div>
                    <h4 style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>Présence Locale</h4>
                    <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Interventions rapides grâce à notre implantation à Valfréjus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Micro-Cards */}
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: 48, maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ padding: 24, background: '#F4F1EA', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>verified</span>
            <div>
              <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Service Certifié</h5>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Excellence et professionnalisme reconnus.</p>
            </div>
          </div>
          <div style={{ padding: 24, background: '#F4F1EA', border: '1px solid rgba(197, 160, 89, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: 32 }}>schedule</span>
            <div>
              <h5 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: 4, fontWeight: 600 }}>Support 7/7</h5>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>Disponibilité totale pour vos locataires.</p>
            </div>
          </div>
        </div>

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
