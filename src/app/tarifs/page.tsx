"use client";

import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export default function Tarifs() {
  const { t: fr } = useLanguage();
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', height: 500, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img loading="lazy" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnmmG5XitX1wL2UVH3H5Sp6gk1G6QJAZI51D5Y0lpw8Evxkq4QCLuAv1AT14k_miuJc4HZ2ENRprP2jV4gCEGRuOdie7moNtomm0gSBNZRE5i-12TVlmbTc7JGe0ES_xOHeYDIsPOcXigQRoEJsXFSJGkuNAx1AxZTS6a2puMVDu8WGoWIVHixnT2dbYf9iKgOhEBQ0XlECkCnxeFVL23SU5oasxOqRPN57aE0FB9Fzya1wQZue3Wy" 
              alt="Luxury alpine resort interior" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f5f3f3 0%, transparent 100%)' }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 16px 32px', maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ width: 32, height: 1, background: 'var(--secondary)' }}></span>
              <span style={{ color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{fr.tarifs.heroTag}</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>
              {fr.tarifs.heroTitle}
            </h1>
            <p style={{ color: 'var(--on-surface-variant)', marginTop: 16, maxWidth: 600 }}>
              {fr.tarifs.heroSubtitle}
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

        {/* Pricing Grid */}
        <section style={{ padding: '0 16px 96px', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            
            {/* Category 1: Ménage */}
            <div className="card-hover" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: 32, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', borderTop: '4px solid #e9c176', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.1 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--primary)' }}>cleaning_services</span>
              </div>
              <div style={{ marginTop: 48, marginBottom: 32 }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 12, fontFamily: 'Libre Caslon Text, serif' }}>{fr.tarifs.card1Title}</h2>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                  {fr.tarifs.card1Desc}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <span style={{ color: 'var(--on-surface)' }}>{fr.tarifs.card1Price1}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>70 €</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <span style={{ color: 'var(--on-surface)' }}>{fr.tarifs.card1Price3}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>10 €</span>
                </div>
              </div>
            </div>

            {/* Category 2: Conciergerie */}
            <div className="card-hover" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: 32, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', borderTop: '4px solid #e9c176', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.1 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--primary)' }}>key</span>
              </div>
              <div style={{ marginTop: 48, marginBottom: 32 }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 12, fontFamily: 'Libre Caslon Text, serif' }}>{fr.tarifs.card2Title}</h2>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                  {fr.tarifs.card2Desc}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <span style={{ color: 'var(--on-surface)' }}>{fr.tarifs.card2Price1}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>60 €</span>
                </div>
              </div>
            </div>

            {/* Category 3: Linge */}
            <div className="card-hover" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: 32, boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', borderTop: '4px solid #e9c176', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, padding: 16, opacity: 0.1 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--primary)' }}>checkroom</span>
              </div>
              <div style={{ marginTop: 48, marginBottom: 32 }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 12, fontFamily: 'Libre Caslon Text, serif' }}>{fr.tarifs.card3Title}</h2>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                  {fr.tarifs.card3Desc}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <span style={{ color: 'var(--on-surface)' }}>{fr.tarifs.card3Price1}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>15 €</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <span style={{ color: 'var(--on-surface)' }}>{fr.tarifs.card3Price3}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>10 €</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <span style={{ color: 'var(--on-surface)' }}>{fr.tarifs.card3Price5}</span>
                  <span style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>5 €</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section style={{ background: 'var(--primary-container)', borderRadius: 12, padding: 48, textAlign: 'center', margin: '0 16px 96px', maxWidth: 1280, marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 10px 20px rgba(0, 30, 66, 0.04)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 10, maxWidth: 600, margin: '0 auto' }}>
            <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.tarifs.ctaTitle}</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--on-primary-container)', lineHeight: 1.7 }}>
              {fr.tarifs.ctaSubtitle}
            </p>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: 32, background: '#e9c176', color: '#261900', padding: '16px 32px', borderRadius: 4, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              {fr.tarifs.ctaButton}
            </Link>
          </div>
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
