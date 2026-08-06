"use client";

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schema for local business
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Serenity Pro Appart",
  "description": "Conciergerie et gestion locative à Valfréjus en Savoie",
  "url": "https://serenityproappart.fr",
  "telephone": "+33781462132",
  "email": "serenityproappart@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "735 rue du cheval",
    "addressLocality": "Valfréjus",
    "postalCode": "73500",
    "addressRegion": "Savoie",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.17376084051724",
    "longitude": "6.652088099608348"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "21:00" }
  ],
  "priceRange": "€€",
  "image": "https://serenityproappart.fr/logo.png",
  "sameAs": [
    "https://instagram.com/serenityproappart"
  ]
};

// Schema for organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Serenity Pro Appart",
  "url": "https://serenityproappart.fr",
  "logo": "https://serenityproappart.fr/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33781462132",
    "contactType": "customer service",
    "availableLanguage": ["French", "English", "Italian"]
  }
};
