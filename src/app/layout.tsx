import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Clés du Charmaix | Conciergerie de Luxe à Valfréjus",
  description: "Conciergerie de luxe à Valfréjus. Gestion des clés, ménage, blanchisserie et maintenance pour vos locations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
