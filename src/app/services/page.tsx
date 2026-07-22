"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesLocations() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const services = [
    {
      icon: "key",
      title: "Gestion des clés",
      description:
        "Accueil personnalisé de vos voyageurs, remise des clés et présentation des lieux en toute sérénité.",
      link: "/cles",
    },
    {
      icon: "cleaning_services",
      title: "Ménage",
      description:
        "Un entretien professionnel rigoureux entre chaque location pour une hygiène impeccable et un confort garanti.",
      link: "/menage",
    },
    {
      icon: "dry_cleaning",
      title: "Blanchisserie",
      description:
        "Location et entretien de linge de maison haut de gamme : draps, serviettes et kits de bienvenue.",
      link: "/blanchisserie",
    },
    {
      icon: "handyman",
      title: "Travaux d'appoint",
      description:
        "Petit entretien, maintenance technique et réparations rapides pour valoriser votre patrimoine.",
      link: "/travaux",
    },
  ];

  const locations = [
    {
      title: "Le Grand Chalet des Cimes",
      badge: "12 Voyageurs",
      badgeType: "premium",
      features: ["6 Ch.", "Fibre", "Spa"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAXBPJXKqDcVRceHgJUtyWhuIVJVjslHqwxEWzK5btHqs48tLVlN71licOiTVL7uMAC2DhtTJtuavxQNkB3xb6gWgiQDIKZo2_yJQFn64Wka4bxVe7FeMLHrUJGgbJ33VmsiVytOtKdQBdH8IhiLoaekfNe8B1MxGjhHpgiNRno-1F9umzzbVZySbqCk-jzLFbL9Rn0SA4wgDhB24rkP9szkwKg-Zdb_A6fbOOH4JsDt9mm-i8L2S_r3AOTN3rdku4PZimXRGkuLJk",
    },
    {
      title: "Appartement L'Alpaga",
      badge: "6 Voyageurs",
      badgeType: "modern",
      features: ["3 Ch.", "Balcon", "Pied des pistes"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDa98jwMc5JJe9baEg2vBmR2-I3UTTD3eStf3Vb6qMtqeKqJVcVT4Q0qOWgaa7WukcJxw2yLQ4PWZND1hrgg8PJx-qJi7E1cGcCMK-m77a_j__K0YgJeI6YI_WEAe2jLQwuwcq9vk5ks8kyrZLGDWuVGEbSq-LYFMvkX0AQjZBpDqRlGy75xCQYeyyJvV_Ju81iL_o20e-wshx06o3hNYqCPguR2Vx1Cw7rNTSv5L6661HzYVlJyOXlx0aRv708w_58lKEMdYdgWQI",
    },
    {
      title: "Chalet Lou Valfréjus",
      badge: "8 Voyageurs",
      badgeType: "authentic",
      features: ["4 Ch.", "Cheminée", "Parking"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSGA0D0Q_F_zu8ChXBJjM4xq8ODyJ0cVahVerk-ycfCm9wcpB8lr24KCFXoRQXaYPtLEvy0Rv6m50KOAJziHWRyUObXkmuW8yC670Tlfo4Kw-_rOQ7JvVahVE7ZTJGpgxjuolHU43Yhcudh_k7Bc0IGU5QJnTCjFxYZOI4JIImxP98FfSkNyYTzoFULBJ9XYIuGAokxP2L7YMkSH51oBCl66ejUGP_u3Sm9pghFjYN9nS2NwpA5yafcCfU_mwD1YTArbUAuY9irdc",
    },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="navbar" style={{ position: 'fixed' }}>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileNavOpen(true)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
            menu
          </span>
        </button>

        <Link href="/" className="navbar-logo"><img src="/logo.png" alt="Serenity Pro Appart" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} /><span>Serenity Pro Appart</span></Link>

        <Link href="/contact" className="btn-primary">Nous contacter</Link>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-header">
            <h2>Serenity Pro Appart</h2>
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
            <Link href="/locations" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">mountain_flag</span>
              Locations
            </Link>
            <Link href="#" onClick={() => setMobileNavOpen(false)}>
              <span className="material-symbols-outlined">contact_support</span>
              Contact
            </Link>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: 80, paddingBottom: 48 }}>
        {/* Hero Title Section */}
        <section style={{ marginBottom: 48, padding: '0 16px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: 'var(--secondary-fixed)',
              color: 'var(--on-secondary-fixed)',
              borderRadius: 20,
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 16,
            }}
          >
            Alpine Excellence
          </div>
          <h1
            style={{
              fontSize: '1.75rem',
              color: 'var(--primary)',
              marginBottom: 8,
            }}
          >
            Conciergerie & Locations
          </h1>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: 400 }}>
            Découvrez nos services exclusifs de conciergerie à Valfréjus et
            notre sélection de chalets d&apos;exception.
          </p>
        </section>

        {/* Services Section */}
        <section style={{ marginBottom: 64, padding: '0 16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 24,
            }}
          >
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>
              Nos Services
            </h2>
            <div
              style={{ width: 48, height: 1, background: 'var(--secondary)' }}
            ></div>
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: 24,
                  borderRadius: 12,
                  boxShadow: 'var(--shadow-luxury)',
                  borderTop: '3px solid rgba(119, 90, 25, 0.3)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      background:
                        index === 0
                          ? 'var(--primary-container)'
                          : index === 1
                          ? 'var(--secondary-fixed)'
                          : 'var(--surface-container)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 24,
                        color:
                          index === 0
                            ? 'white'
                            : index === 1
                            ? 'var(--secondary)'
                            : 'var(--primary)',
                      }}
                    >
                      {service.icon}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--primary)',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: 'var(--on-surface-variant)',
                    marginBottom: 16,
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  style={{
                    color: 'var(--secondary)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  {index === 0 ? "Détails du service" : "En savoir plus"}{" "}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Rentals Section */}
        <section style={{ padding: '0 16px' }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 8 }}>
              Nos Locations Premium
            </h2>
            <p style={{ color: 'var(--on-surface-variant)' }}>
              Sélection exclusive au cœur de la station de Valfréjus.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 32 }}>
            {locations.map((location, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-luxury)',
                  border: '1px solid rgba(119, 90, 25, 0.1)',
                }}
              >
                <div
                  style={{
                    height: 256,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 10,
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                    }}
                  >
                    {location.badge}
                  </div>
                  <img
                    src={location.image}
                    alt={location.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--primary)',
                      marginBottom: 16,
                    }}
                  >
                    {location.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      gap: 16,
                      color: 'var(--on-surface-variant)',
                      marginBottom: 24,
                      fontSize: '0.875rem',
                    }}
                  >
                    {location.features.map((feature, i) => (
                      <span
                        key={i}
                        style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 18 }}
                        >
                          {i === 0 ? 'bed' : i === 1 ? 'deck' : 'garage'}
                        </span>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    style={{
                      width: '100%',
                      padding: 16,
                      border: '2px solid var(--secondary)',
                      borderRadius: 8,
                      background: 'transparent',
                      color: 'var(--secondary)',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Consulter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Banner */}
        <section
          style={{
            background: 'var(--primary)',
            color: 'white',
            borderRadius: 12,
            padding: 32,
            textAlign: 'center',
            margin: '48px 16px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 128,
              height: 128,
              background: 'var(--secondary)',
              opacity: 0.2,
              borderRadius: '50%',
              transform: 'translate(50%, -50%)',
            }}
          ></div>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 48, color: 'var(--secondary)', marginBottom: 16 }}
          >
            key
          </span>
          <h2 style={{ fontSize: '1.5rem', marginBottom: 16 }}>
            Prêt pour votre séjour ?
          </h2>
          <p style={{ opacity: 0.8, marginBottom: 32 }}>
            Notre équipe de conciergerie est à votre disposition pour faire de
            vos vacances un moment inoubliable.
          </p>
          <button
            style={{
              background: 'var(--secondary-fixed)',
              color: 'var(--on-secondary-fixed)',
              padding: '12px 32px',
              borderRadius: 8,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Nous Contacter
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: 'var(--surface-container-high)',
          borderTop: '1px solid rgba(119, 90, 25, 0.2)',
          padding: '32px 16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            textAlign: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--primary)',
                display: 'block',
                marginBottom: 4,
              }}
            >
              Serenity Pro Appart
            </span>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.75rem' }}>
              © 2024 Serenity Pro Appart. Alpine Excellence.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a
              href="#"
              style={{
                color: 'var(--on-surface-variant)',
                fontSize: '0.75rem',
                textDecoration: 'underline',
              }}
            >
              Mentions Légales
            </a>
            <a
              href="#"
              style={{
                color: 'var(--on-surface-variant)',
                fontSize: '0.75rem',
                textDecoration: 'underline',
              }}
            >
              Confidentialité
            </a>
            <a
              href="#"
              style={{
                color: 'var(--on-surface-variant)',
                fontSize: '0.75rem',
                textDecoration: 'underline',
              }}
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
