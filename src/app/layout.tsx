import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, organizationSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://serenityproappart.fr"),
  title: {
    default: "Serenity Pro Appart | Conciergerie à Valfréjus",
    template: "%s | Serenity Pro Appart",
  },
  description: "Conciergerie premium à Valfréjus en Savoie. Gestion locative, ménage, location de linge et services personnalisés pour votre appartement.",
  keywords: [
    "conciergerie",
    "Valfréjus",
    "gestion locative",
    "location appartement",
    "ménage",
    "Savoie",
    "location de linge",
    "ski",
    "Modane"
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
    canonical: "https://serenityproappart.fr",
    languages: {
      fr: "https://serenityproappart.fr",
      en: "https://serenityproappart.fr",
      de: "https://serenityproappart.fr",
      es: "https://serenityproappart.fr",
      it: "https://serenityproappart.fr",
      nl: "https://serenityproappart.fr",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://serenityproappart.fr",
    siteName: "Serenity Pro Appart",
    title: "Serenity Pro Appart | Conciergerie à Valfréjus",
    description: "Conciergerie premium à Valfréjus en Savoie. Gestion locative, ménage, location de linge et services personnalisés.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Serenity Pro Appart - Conciergerie à Valfréjus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenity Pro Appart | Conciergerie à Valfréjus",
    description: "Conciergerie premium à Valfréjus en Savoie. Gestion locative, ménage, location de linge.",
    images: ["/og-image.png"],
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
