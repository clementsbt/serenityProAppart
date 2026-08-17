"use client";

import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  const { t: fr } = useLanguage();
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 80 }}>
        {/* Hero Section */}
        <section style={{ padding: '48px 16px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: 1.2 }}>
            Mentions Légales
          </h1>
        </section>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 16px' }}>
          
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.editorTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.editorText}
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.responsableTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Léa Lou Simon<br />
              120 Rue des Bettets<br />
              73500 Modane<br />
              Téléphone : 07.81.46.21.32<br />
              E-mail : serenityproappart@gmail.com
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.developperTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.developperText}
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.companyTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Serenity Pro Appart<br />
              Forme juridique : Auto-entreprise<br />
              Adresse du siège social : 120 Rue des Bettets, 73500 Modane<br />
              SIRET : 10833069700013
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.hostingTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.hostingText}
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.copyrightTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.copyrightText}
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.responsabilityTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.responsabilityText}
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.dataTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.dataText1}
            </p>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginTop: 16 }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition, de suppression et de portabilité des données vous concernant.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginTop: 16 }}>
              Pour exercer ces droits, vous pouvez contacter : serenityproappart@gmail.com
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.cookiesTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.cookiesText}
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>{fr.mentionsLegales.lawTitle}</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              {fr.mentionsLegales.lawText}
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
