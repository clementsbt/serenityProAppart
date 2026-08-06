"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage, languages } from "@/context/LanguageContext";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t: fr } = useLanguage();

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <>
      <header className="navbar">
        <button className="mobile-menu-btn" onClick={() => setMobileNavOpen(true)}>
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>menu</span>
        </button>
        <Link href="/" className="navbar-logo">
          <img src="/logo.png" alt="Serenity Pro Appart" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
          <span>Serenity Pro Appart</span>
        </Link>
        <div className="navbar-links">
          <Link href="/#services" className={currentPage === 'services' ? 'active' : ''}>{fr.nav.services}</Link>

          <Link href={fr.nav.clesRoute} className={currentPage === 'cles' ? 'active' : ''}>{fr.nav.cles}</Link>
          <Link href={fr.nav.locationRoute} className={currentPage === 'location' ? 'active' : ''}>{fr.nav.location}</Link>
          <Link href={fr.nav.travauxRoute} className={currentPage === 'travaux' ? 'active' : ''}>{fr.nav.travaux}</Link>
          <Link href={fr.nav.menageRoute} className={currentPage === 'menage' ? 'active' : ''}>{fr.nav.menage}</Link>
          <Link href={fr.nav.tarifsRoute} className={currentPage === 'tarifs' ? 'active' : ''}>{fr.nav.tarifs}</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Language Selector */}
          <div className="lang-selector">
            <button 
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
            >
              <span>{currentLang.flag}</span>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>expand_more</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangOpen(false);
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="btn-primary">{fr.nav.contact}</Link>
        </div>
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
            <Link href="/#services" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>
              {fr.nav.services}
            </Link>

            <Link href={fr.nav.clesRoute} onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">key</span>
              {fr.nav.cles}
            </Link>
            <Link href={fr.nav.locationRoute} onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">laundry</span>
              {fr.nav.location}
            </Link>
            <Link href="/travaux" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">construction</span>
              {fr.nav.travaux}
            </Link>
            <Link href="/menage" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">cleaning_services</span>
              {fr.nav.menage}
            </Link>
            <Link href="/tarifs" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">euro</span>
              {fr.nav.tarifs}
            </Link>
            <Link href="/contact" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">mail</span>
              {fr.nav.contact}
            </Link>
            
            {/* Mobile Language Selector */}
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--surface-variant)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginBottom: 8, padding: '0 16px' }}>Langue / Language</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '0 16px' }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    style={{ 
                      padding: '8px 12px', 
                      borderRadius: 8,
                      border: language === lang.code ? '2px solid var(--secondary)' : '1px solid var(--surface-variant)',
                      background: language === lang.code ? 'var(--secondary-container)' : 'var(--surface)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.875rem'
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-nav-overlay" onClick={() => setMobileNavOpen(false)}></div>
      </div>

      <style jsx>{`
        .lang-selector {
          position: relative;
        }
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid var(--surface-variant);
          background: var(--surface);
          cursor: pointer;
          font-size: 1rem;
        }
        .lang-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 4px;
          background: var(--surface);
          border: 1px solid var(--surface-variant);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          overflow: hidden;
          z-index: 1000;
          min-width: 160px;
        }
        .lang-option {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 12px 16px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 0.875rem;
          text-align: left;
        }
        .lang-option:hover {
          background: var(--surface-container-high);
        }
        .lang-option.active {
          background: var(--secondary-container);
          color: var(--on-secondary-container);
        }
      `}</style>
    </>
  );
}
