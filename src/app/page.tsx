"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t: fr } = useLanguage();

  const services = [
    {
      icon: "vpn_key",
      title: fr.nav.cles,
      description: fr.home.clesCardDesc,
      features: [
        fr.home.clesCardFeature1,
        fr.home.clesCardFeature2,
      ],
      large: true,
      href: "/cles",
    },
    {
      icon: "inventory_2",
      title: fr.nav.location,
      description: fr.home.locationCardDesc,
      large: false,
      href: "/location",
    },
    {
      icon: "cleaning_services",
      title: fr.nav.menage,
      description: fr.home.menageCardDesc,
      large: false,
      href: "/menage",
    },
    {
      icon: "build",
      title: fr.home.travauxCardTitle,
      description: fr.home.travauxCardDesc,
      tags: [fr.home.travauxCardTag1, fr.home.travauxCardTag2],
      large: true,
      href: "/travaux",
    },
    {
      icon: "euro",
      title: fr.nav.tarifs,
      description: fr.tarifs.heroSubtitle,
      
      extraLarge: true,
      href: fr.nav.tarifsRoute,
    },
  ];

  function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardContent = (
      <>
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
      </>
    );

    const cardClass = `service-card ${service.extraLarge ? "service-card-extra-large" : service.large ? "service-card-large" : "service-card-small"}`;

    if (service.href) {
      return (
        <Link href={service.href} key={index} className={cardClass}>
          {cardContent}
        </Link>
      );
    }

    return (
      <div key={index} className={cardClass}>
        {cardContent}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://www.modane.fr/app/uploads/2025/08/MAIRIE-MODANE-152.jpg"
            alt="Valfréjus Mountains"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <img src="/logo.png" alt="Serenity Pro Appart" style={{ width: 180, height: 180, borderRadius: '50%', objectFit: 'cover', marginBottom: 24, border: '3px solid white', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }} />
          <h1>{fr.home.heroTitle}</h1>
          <p>
            {fr.home.heroSubtitle}
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem', display: 'inline-block' }}>
              {fr.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <p className="stat-number">7/7J</p>
            <p className="stat-label">{fr.common.disponibilite}</p>
          </div>

          <div className="stat-item">
            <p className="stat-number">{fr.common.presente}</p>
            <p className="stat-label">{fr.common.annee}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section-header">
          <span className="section-tag">{fr.home.excellenceTag}</span>
          <h2 className="section-title">{fr.home.servicesTitle}</h2>
          <div className="section-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
              <p>{fr.common.louContact}</p>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">{fr.home.aboutTitle}</span>
            <h2>{fr.home.aboutTitle}</h2>
            <p>
              {fr.home.aboutText1}
            </p>
            <p>
              {fr.home.aboutText2}
            </p>
            <ul className="about-features">
              <li>
                <span className="material-symbols-outlined">verified</span>
                {fr.home.featureReactivity}
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                {fr.home.featurePersonalized}
              </li>
              <li>
                <span className="material-symbols-outlined">verified</span>
                {fr.home.featureTerritory}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2>{fr.home.ctaTitle}</h2>
          <p>
            {fr.home.ctaSubtitle}
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn primary">
              <span className="material-symbols-outlined">mail</span>
              {fr.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
