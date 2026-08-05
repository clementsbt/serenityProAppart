"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function MentionsLegales() {
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
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Éditeur du site</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Le présent site est édité par Serenity Pro Appart, agence de conciergerie spécialisée dans la gestion et l'entretien de logements à Valfréjus.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Responsable de la publication</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Léa Lou Simon<br />
              120 Rue des Bettets<br />
              73500 Modane<br />
              Téléphone : 07.81.46.21.32<br />
              E-mail : serenityproappart@gmail.com
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Développement du site</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Site conçu et développé par Clément Subtil.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Entreprise</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Serenity Pro Appart<br />
              Forme juridique : Auto-entreprise<br />
              Adresse du siège social : 120 Rue des Bettets, 73500 Modane<br />
              SIRET : [à remplacer]
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Hébergement du site</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Le site est hébergé par Vercel Inc.<br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Propriété intellectuelle</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              L'ensemble du contenu présent sur le site, notamment les textes, images, graphismes, logo, icônes, structure et mise en page, est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de tout élément du site est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Responsabilité</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Serenity Pro Appart s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Données personnelles</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Les informations recueillies via le site sont destinées uniquement au traitement des demandes de contact et à la gestion des prestations proposées par Serenity Pro Appart.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginTop: 16 }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition, de suppression et de portabilité des données vous concernant.
            </p>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginTop: 16 }}>
              Pour exercer ces droits, vous pouvez contacter : serenityproappart@gmail.com
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Cookies</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Le site peut utiliser des cookies afin d'assurer son bon fonctionnement et, le cas échéant, de mesurer son audience. Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: 16, fontFamily: 'Libre Caslon Text, serif' }}>Droit applicable</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
              Le présent site et ses mentions légales sont soumis au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

        </div>
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
              <li><a href="/mentions-legales">Mentions Légales</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Serenity Pro Appart by Lou. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
