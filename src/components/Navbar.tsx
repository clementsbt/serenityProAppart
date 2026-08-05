"use client";

import fr from "../app/fr.json";
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
          <Link href="/#services" className={currentPage === 'services' ? 'active' : ''}>{fr.nav.services}</Link>

          <Link href="/cles" className={currentPage === 'cles' ? 'active' : ''}>{fr.nav.cles}</Link>
          <Link href="/location" className={currentPage === 'location' ? 'active' : ''}>{fr.nav.location}</Link>
          <Link href="/travaux" className={currentPage === 'travaux' ? 'active' : ''}>{fr.nav.travaux}</Link>
          <Link href="/menage" className={currentPage === 'menage' ? 'active' : ''}>{fr.nav.menage}</Link>
          <Link href="/tarifs" className={currentPage === 'tarifs' ? 'active' : ''}>{fr.nav.tarifs}</Link>
        </div>
        <Link href="/contact" className="btn-primary">{fr.nav.contact}</Link>
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

            <Link href="/cles" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">key</span>
              {fr.nav.cles}
            </Link>
            <Link href="/location" onClick={() => setMobileNavOpen(false)}>
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
          </div>
        </div>
      </div>
    </>
  );
}
