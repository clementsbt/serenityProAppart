"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export default function Menage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', height: '80vh', minHeight: 600, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img 
              src="/menage-hero.jpg"
              alt="Luxury alpine chalet interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 5, 19, 0.4)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 16px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#e9c176', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Excellence & Précision</span>
            <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: 24, fontFamily: 'Libre Caslon Text, serif', maxWidth: 800, lineHeight: 1.1 }}>
              Ménage Hôtelier d'Exception
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', maxWidth: 600, marginBottom: 40, lineHeight: 1.6 }}>
              L'exigence d'un palace adaptée à votre résidence de montagne. Un nettoyage méticuleux pour garantir une expérience inoubliable à chaque séjour.
            </p>
            <a href="#contact" style={{ background: '#c5a059', color: '#000513', padding: '16px 32px', borderRadius: 4, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              Demander un devis
            </a>
          </div>
        </section>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 16px', opacity: 0.7 }}>
          <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)', maxWidth: 100 }}></div>
          <span className="material-symbols-outlined" style={{ color: '#c5a059', margin: '0 16px' }}>vpn_key</span>
          <div style={{ flex: 1, borderTop: '1px solid var(--outline-variant)', maxWidth: 100 }}></div>
        </div>

        {/* Philosophy Section */}
        <section style={{ padding: '48px 16px 96px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontFamily: 'Libre Caslon Text, serif' }}>Le Standard Serenity</h2>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
                Nous ne faisons pas que nettoyer, nous restaurons l'harmonie de votre espace. Chaque recoin est inspecté, chaque surface est traitée avec les produits adaptés pour préserver la qualité de vos matériaux (bois massif, pierre naturelle, laiton).
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
                Nos équipes sont formées aux techniques de l'hôtellerie de luxe, garantissant une discrétion absolue et un résultat impeccable qui ravit vos locataires dès qu'ils franchissent la porte.
              </p>
            </div>
            <div style={{ position: 'relative', height: 500, borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 20px rgba(0, 30, 66, 0.08)' }}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVh-UWZaxqC9xvwZpbbNsZV9ui1vS94SA_XMHpwKHHETeHg2FJCxgIA6urDXZgCAOYauiUbGlGeE4sNk5n8lav79VBjWcKcQ9GiC0zVZ2VDV-2HuQNqrGmle9qf-aBG2keQMwXT7_JVZoEd1LXrTt4vRGgJD0Z7KyygZD2Pr2ZER6v1wil6eAKiGgFy1_R3bqY5wCHq2x2qEnC2m_szp1ChFuE-Rho4RXi6f6_DsRt33wUJlhEv8aR"
                alt="Cleaning luxury bathroom"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,5,19,0.8), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', margin: 24, borderRadius: 8, borderTop: '3px solid #c5a059' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 8 }}>Détail Inégalé</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem' }}>Des contrôles qualité systématiques après chaque intervention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid - Protocol d'Intervention */}
        <section style={{ background: 'var(--surface-container-low)', padding: '96px 16px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Notre Protocole d'Intervention</h2>
              <p style={{ color: 'var(--on-surface-variant)', maxWidth: 600, margin: '0 auto' }}>Un aperçu de notre checklist stricte, conçue pour ne rien laisser au hasard entre deux séjours.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {/* Item 1 - Désinfection */}
              <div style={{ background: 'var(--surface-container-lowest)', padding: 32, borderRadius: 12, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', gridColumn: 'span 2' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--primary)', marginBottom: 16 }}>cleaning_services</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 12 }}>Désinfection & Aération</h3>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>Protocole sanitaire rigoureux. Aération prolongée de toutes les pièces, désinfection des points de contact fréquents (poignées, interrupteurs, télécommandes) avec des produits virucides certifiés.</p>
              </div>

              {/* Item 2 - Cuisine */}
              <div style={{ background: 'var(--surface-container-lowest)', padding: 32, borderRadius: 12, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', borderTop: '3px solid #c5a059' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--primary)', marginBottom: 16 }}>countertops</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 12 }}>Cuisine Impeccable</h3>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>Dégraissage complet, nettoyage intérieur de l'électroménager, vérification de la vaisselle.</p>
              </div>

              {/* Item 3 - Salle de bain */}
              <div style={{ background: 'var(--surface-container-lowest)', padding: 32, borderRadius: 12, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--primary)', marginBottom: 16 }}>shower</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 12 }}>Salles de Bain Spa</h3>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>Détartrage méticuleux, brillance des chromes, nettoyage des joints et vitres de douche.</p>
              </div>

              {/* Item 4 - Inspection Finale */}
              <div style={{ background: 'var(--primary-container)', padding: 32, borderRadius: 12, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', gridColumn: 'span 2', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#e9c176', marginBottom: 16 }}>verified</span>
                <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: 12 }}>Inspection Finale</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 400 }}>Le superviseur effectue un passage final, vérifie l'alignement des éléments de decoration, l'ambiance olfactive, et verrouille la propriété pour le prochain hôte.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section style={{ padding: '96px 16px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ aspectRatio: '1/1', borderRadius: 12, overflow: 'hidden' }}>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCroEAJBT5sP8esssfCyMGxm75FZYij6FwIyVPVPpwpTk1ld2mOkexwTueutukKwsJe_Xtl7mXXEzgxL-lZ3dcBPUvLvFLh9Nf0WD3FPBqZI6p3RzN4K09FTkIx0XbDJxbtkitwnZtvlYQtB81Jzi5poHblqpjFr2HNznb4WxhgYWQOVUXPEhcqObCMIiBuMhXsSDFzVZlW42_j8e_WZFPAQH1yUN2InlIj5zCyPthTGtf0-qkNKVmT"
                  alt="Professional cleaning equipment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ aspectRatio: '1/1', borderRadius: 12, overflow: 'hidden', marginTop: 32 }}>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS93hBWm_k-rbKMK2FiYs-31IjKcqHjOmuzCEfMin0Oef0wMVkWx5hGTmugi0sIMAeSeJ6M93qGyq-aJv4Wer7P23YjXuF2GOxnsQn7WUtkC8AVlyJH1rJBsiOT-VZle_mKyttCVxDOj9II9IkmiaOHAO8yZ5JpTgYSUKyq8rvx1GwqKHin8UwbUsXbEIIEFtswavNgi_05fzYUjmJx9u5OEmXkU609MJIELnILvTmyakvcZipnyj5"
                  alt="Pristine bed linens"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <span style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0,5,19,0.05)', color: 'var(--primary)', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', alignSelf: 'flex-start' }}>Équipement Pro</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--primary)', fontFamily: 'Libre Caslon Text, serif' }}>Matériel et Produits de Haute Performance</h2>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
                Nous refusons les compromis. Nos équipes interviennent avec du matériel de qualité industrielle, garantissant un nettoyage en profondeur impossible à atteindre avec des équipements domestiques.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: '#c5a059', marginTop: 4 }}>check_circle</span>
                  <span style={{ color: 'var(--on-surface)' }}>Aspirateurs HEPA professionnels pour une qualité de l'air optimale.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: '#c5a059', marginTop: 4 }}>check_circle</span>
                  <span style={{ color: 'var(--on-surface)' }}>Produits éco-responsables respectueux des matériaux nobles de montagne.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ color: '#c5a059', marginTop: 4 }}>check_circle</span>
                  <span style={{ color: 'var(--on-surface)' }}>Nettoyeurs vapeur pour une désinfection thermique sans produits chimiques.</span>
                </li>
              </ul>
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
