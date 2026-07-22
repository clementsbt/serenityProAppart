"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const services = [
    {
      icon: "vpn_key",
      title: "Gestion des clés",
      description:
        "Accueil physique personnalisé pour vos locataires. Remise des clés en main propre, présentation du logement et des consignes de sécurité pour une expérience sereine dès l'arrivée.",
      features: [
        "Check-in & Check-out physiques",
        "État des lieux rigoureux",
      ],
      large: true,
    },
    {
      icon: "dry_cleaning",
      title: "Blanchisserie",
      description:
        "Gestion complète du linge de maison. Lavage, séchage et repassage de qualité hôtelière pour un confort absolu.",
      large: false,
    },
    {
      icon: "cleaning_services",
      title: "Ménage",
      description:
        "Nettoyage professionnel entre chaque location ou de fin de saison. Nous garantissons une hygiène irréprochable.",
      large: false,
    },
    {
      icon: "build",
      title: "Travaux d'appoint",
      description:
        "Petite maintenance et réparations rapides pour maintenir votre bien en parfait état. Réactivité et fiabilité au cœur de nos montagnes.",
      tags: ["Maintenance", "Réparations", "Hivernage"],
      large: true,
    },
  ];


  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileNavOpen(true)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
            menu
          </span>
        </button>

        <Link href="/" className="navbar-logo">
          Les Clés du Charmaix
        </Link>

        <div className="navbar-links">
          <Link href="#services">Services</Link>
          <Link href="#about">Lou</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="navbar-actions">
          <button className="btn-primary">Book Now</button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <h2>Les Clés du Charmaix</h2>
            <button
              className="mobile-nav-close"
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="mobile-nav-links">
            <Link href="#services" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>
              Services
            </Link>
            <Link href="#about" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">person</span>
              Lou
            </Link>
            <Link href="#contact" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">contact_support</span>
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA800YrSRsaTJEjBsLv35xTg7Rwe7PvIJ-KWoT_-q9Q0xppa7JjF-tsDLqHvSE1M4d2WLF5EGcT4Tu9ayOeq3icLns-60Ic4UgaYNZsC6F2ehlHGYrqYh477aLShGcz_-eGCbjTVqK-rBcPkPy6GWmR9eMSHtocLPOCiN8BiMnWBGwygs5amCgfScAw87H-m8gBSlUYcAxoGNdM0wkIyKrDHpVePAr-PZqNsTcPWhvQ9WtivJagwF6NpcWSR07O1tR1-zZrfhv2Z8"
            alt="Valfréjus Mountains"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Votre Conciergerie Premium à Valfréjus</h1>
          <p>
            L'excellence au service de votre séjour alpin. Gestion de clés,
            maintenance et services sur-mesure.
          </p>
          <div style={{ marginTop: 24 }}>
            <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
              Réserver un service
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <p className="stat-number">7/7J</p>
            <p className="stat-label">Disponibilité</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">24H</p>
            <p className="stat-label">Assistance</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">100%</p>
            <p className="stat-label">Local</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">07.81...</p>
            <p className="stat-label">Urgence</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section-header">
          <span className="section-tag">Excellence & Dévouement</span>
          <h2 className="section-title">Nos Services Exclusifs</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.large ? "service-card-large" : "service-card-small"
                }`}
            >
              <div className="service-icon">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.features && (
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="material-symbols-outlined">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {service.tags && (
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Lou */}
      <section className="section" id="about">
        <div className="about-container">
          <div className="about-image">
            <div className="about-image-wrapper">
              <img src="/lou.jpg" alt="Lou - Fondatrice des Clés du Charmaix" />
            </div>
            <div className="about-image-badge">
              <h3>Lou</h3>
              <p>Votre contact privilégié à Valfréjus</p>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">L'esprit de service</span>
            <h2>Une présence locale toute l'année</h2>
            <p>
              Habitante du village et passionnée par notre belle station, j'ai fondé <strong>Les Clés du Charmaix</strong> pour offrir aux propriétaires une tranquillité d'esprit absolue.
            </p>
            <p>
              Ma présence sur place 365 jours par an me permet d'intervenir rapidement et de veiller personnellement à chaque détail. Je ne suis pas seulement une prestataire, je suis vos yeux et vos oreilles à Valfréjus.
            </p>
            <ul className="about-features">
              <li>
                <span className="material-symbols-outlined">verified</span>
                Réactivité et proximité immédiate
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Service 100% personnalisé
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                Excellente connaissance du territoire
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2>Prêt à confier vos clés ?</h2>
          <p>
            Contactez-nous dès aujourd&apos;hui pour une estimation personnalisée de
            la gestion de votre bien à Valfréjus.
          </p>
          <div className="cta-buttons">
            <a href="mailto:lesclesducharmaix@gmail.com" className="cta-btn primary">
              <span className="material-symbols-outlined">mail</span>
              Nous contacter
            </a>
            <a href="tel:+33781462132" className="cta-btn secondary">
              <span className="material-symbols-outlined">call</span>
              +33 7 81 46 21 32
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Les Clés du Charmaix</h4>
            <p>
              Conciergerie de Luxe à Valfréjus. Excellence, proximité et
              confiance.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Mentions Légales</a>
              </li>
              <li>
                <a href="#">Confidentialité</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Les Clés du Charmaix. Alpine Excellence.</p>
        </div>
      </footer>
    </>
  );
}
