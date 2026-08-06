"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t: fr } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>{fr.common.siteName}</h4>
          <p>{fr.common.tagline}</p>
        </div>
        <div>
          <h4>{fr.footer.navigation}</h4>
          <ul className="footer-links">
            <li><a href="/">{fr.nav.home}</a></li>
            <li><a href="/cles">{fr.nav.cles}</a></li>
            <li><a href="/location">{fr.nav.location}</a></li>
            <li><a href="/menage">{fr.nav.menage}</a></li>
            <li><a href="/travaux">{fr.nav.travaux}</a></li>
            <li><a href="/tarifs">{fr.nav.tarifs}</a></li>
            <li><a href="/contact">{fr.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <h4>{fr.footer.legal}</h4>
          <ul className="footer-links">
            <li><a href="/mentions-legales">{fr.footer.mentionsLegales}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{fr.footer.copyright}</p>
      </div>
    </footer>
  );
}
