import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serenity Pro Appart | Location de charme à Modane",
  description: "Serenity Pro Appart propose des locations de charme à Modane. Appartements et chalets pour vos séjours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
