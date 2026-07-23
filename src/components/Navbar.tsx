"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
          <Link href="/#services" className={currentPage === 'services' ? 'active' : ''}>Services</Link>
          <Link href="/#about" className={currentPage === 'about' ? 'active' : ''}>Lou</Link>
          <Link href="/cles" className={currentPage === 'cles' ? 'active' : ''}>Clés</Link>
          <Link href="/blanchisserie" className={currentPage === 'blanchisserie' ? 'active' : ''}>Blanchisserie</Link>
          <Link href="/travaux" className={currentPage === 'travaux' ? 'active' : ''}>Travaux</Link>
          <Link href="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</Link>
        </div>
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
            <Link href="/#services" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>
              Services
            </Link>
            <Link href="/#about" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">person</span>
              Lou
            </Link>
            <Link href="/cles" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">key</span>
              Gestion clés
            </Link>
            <Link href="/blanchisserie" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">laundry</span>
              Blanchisserie
            </Link>
            <Link href="/travaux" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">construction</span>
              Travaux
            </Link>
            <Link href="/contact" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">contact_support</span>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
