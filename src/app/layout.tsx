import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, organizationSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://serenityproappart.com"),
  title: {
    default: "Serenity Pro Appart | Conciergerie & Gestion Locative Valfréjus",
    template: "%s | Serenity Pro Appart",
  },
  description: "Serenity Pro Appart, votre conciergerie à Valfréjus : ménage, remise des clés, check-out et location de kits de draps et serviettes.",
  keywords: [
    "conciergerie Valfréjus",
    "conciergerie Airbnb Valfréjus",
    "gestion Airbnb Valfréjus",
    "gestion locative Valfréjus",
    "gestion location saisonnière Valfréjus",
    "gestion clés Valfréjus",
    "ménage Valfréjus",
    "location appartement Valfréjus",
    "conciergerie location courte durée Valfréjus",
    "service de conciergerie Valfréjus",
    "gestion appartement Valfréjus",
    "gestion chalet Valfréjus",
    "intendance résidence secondaire Valfréjus",
    "mise en location appartement Valfréjus",
    "maximiser revenus locatifs Valfréjus",
    "agence gestion locative Valfréjus",
    "conciergerie propriétaire Valfréjus",
    "Léa Lou Simon Valfréjus",
    "Savoie",
    "Modane",
    "conciergerie France",
    "France"
  ],
  authors: [{ name: "Serenity Pro Appart" }],
  creator: "Serenity Pro Appart",
  publisher: "Serenity Pro Appart",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://serenityproappart.com",
    languages: {
      fr: "https://serenityproappart.com",
      en: "https://serenityproappart.com",
      de: "https://serenityproappart.com",
      es: "https://serenityproappart.com",
      it: "https://serenityproappart.com",
      nl: "https://serenityproappart.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://serenityproappart.com",
    siteName: "Serenity Pro Appart",
    title: "Serenity Pro Appart | Conciergerie & Gestion Locative Valfréjus",
    description: "Conciergerie et gestion locative à Valfréjus. Gestion Airbnb, location saisonnière, intendance résidence secondaire,最大化 revenus locatifs.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Serenity Pro Appart - Conciergerie à Valfréjus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenity Pro Appart | Conciergerie & Gestion Locative Valfréjus",
    description: "Conciergerie et gestion locative à Valfréjus. Gestion Airbnb, intendance résidence secondaire,最大化 revenus locatifs.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/png" />
        <link rel="shortcut icon" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;500;600;700&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;500;600;700&display=swap" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body>
        <LanguageProvider>
          <JsonLd data={localBusinessSchema} />
          <JsonLd data={organizationSchema} />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
