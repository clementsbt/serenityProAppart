"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface ContactCTAProps {
}

export default function ContactCTA({ }: ContactCTAProps) {
  const { t: fr } = useLanguage();

  return (
    <section style={{ padding: '0 16px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ 
        background: 'var(--surface-container-low)', 
        borderRadius: 16, 
        padding: 32, 
        boxShadow: 'var(--shadow-luxury)',
        border: '1px solid rgba(197, 160, 89, 0.2)' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          <div style={{ position: 'relative' }}>
            <img 
              src="/lou.jpg" 
              alt={fr.common.louFounder} 
              style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} 
            />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 24, height: 24, background: '#22c55e', borderRadius: '50%', border: '2px solid white' }}></div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 8 }}>{fr.common.needAssistance}</h4>
            <p style={{ color: 'var(--on-surface-variant)' }}>{fr.common.louAvailable}</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 400, margin: '0 auto' }}>
          <Link href="/contact" style={{ padding: '14px 32px', background: 'var(--secondary)', color: 'white', borderRadius: 8, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none' }}>
            <span className="material-symbols-outlined">chat</span>
            {fr.common.contactLou}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <a href="tel:+33781462132" style={{ padding: '14px 32px', border: '2px solid var(--secondary)', color: 'var(--secondary)', borderRadius: 8, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none' }}>
            <span className="material-symbols-outlined">call</span>
            07.81.46.21.32
          </a>
        </div>
      </div>
    </section>
  );
}
