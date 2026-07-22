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

  const locations = [
    {
      title: "Le Grand Chalet des Cimes",
      badge: "PREMIUM",
      badgeType: "premium",
      guests: 12,
      rooms: 5,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkDuj4Wd9wrljGxe3ixaI5SSjBpey5LGze3Cl4fZrRgUVE6CEYbtvk_OqYPi1z3SFlUr9Bn3m5EVLr_Tdle0dUeBxjtYbfwhwjjsmwb37xnvkpvDIj5Czl4YJCaoQaCqFSU1I3qllJz12Fw_jJ-cloUFDglIk6QDvDmpjlQyfEYTc0qONwMlLCe_54cbIRWawQ_95UlEiF4876y6wGm6nF_F8HzRvaFoprTENrUhy5_tTOSYLQOiLDz2r8ab5nrC__tEXCMWFt1lI",
    },
    {
      title: "Appartement L'Alpaga",
      badge: "MODERNE",
      badgeType: "modern",
      guests: 6,
      rooms: 3,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAWkcV-WtiIFMgLdu1LvrK78YSlaF2enML9CmF3qy8ohXNQCG20K4VneP1wyhLB0-DN0lp-R2TGrC6K8UabTqlpPWZXWJr8AjzhFly8wfYAjAuEKTpiO4r_vrrmJhcL4bZ_qwoTYptpBM9GCptLaB8CLCeu0ZyhvE1khJIwOm-UmVHe6wv4gam99KVkx13A7RdeObY3CnSUzZqg6ydrKFklbX8wZyU4KezFBZdk92aNbdUdZ-c70kBkFYwhBRZVGFY0u38P2wMCGas",
    },
    {
      title: "Chalet Lou Valfréjus",
      badge: "AUTHENTIQUE",
      badgeType: "authentic",
      guests: 8,
      rooms: 4,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjtCAAIH1OjQ-4DzFbcK-n8Ik3rrTq4-Glteo7cD7pr-yZPhR0Zw485fLioPLWbTsUqKN0gvmelgu8Yk4gv_YHr1rkE2wKEx3TL8pdfD8Br-76KXya8fiI8b6slO6fgIqcSG9S5_FX4rzZx_dgld8X7IJ_B4AkkTzuscgCFp1Zyl2KipKF6ca8zSohFgCSZ0xWNVOlJujMM4_rGU4FVdIvw8ADRrME9zeq5ZbssoPEL4231VFxrLTXnofFox0pDBm9uPCpMdp98IY",
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
          <Link href="#locations">Locations</Link>
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
            <Link href="#" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">concierge</span>
              Services
            </Link>
            <Link href="#locations" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">mountain_flag</span>
              Locations
            </Link>
            <Link href="#contact" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">contact_support</span>
              Contact
            </Link>
            <Link href="#" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">account_circle</span>
              My Account
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

      {/* Divider */}
      <div className="section-divider-icon container">
        <div className="line"></div>
        <span className="material-symbols-outlined">landscape</span>
        <div className="line"></div>
      </div>

      {/* Locations */}
      <section className="section" id="locations" style={{ background: 'var(--surface-container-low)' }}>
        <div className="section-header">
          <span className="section-tag">Séjours d'Exception</span>
          <h2 className="section-title">Nos Locations Premium</h2>
        </div>

        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <div className="location-image">
                <img src={location.image} alt={location.title} />
                <span className={`location-badge ${location.badgeType}`}>
                  {location.badge}
                </span>
              </div>
              <div className="location-content">
                <h3>{location.title}</h3>
                <div className="location-features">
                  <span>
                    <span className="material-symbols-outlined">group</span>
                    {location.guests} pers.
                  </span>
                  <span>
                    <span className="material-symbols-outlined">home</span>
                    {location.rooms} Chambres
                  </span>
                </div>
                <button className="location-btn">Consulter</button>
              </div>
            </div>
          ))}
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
                <a href="#locations">Locations</a>
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
