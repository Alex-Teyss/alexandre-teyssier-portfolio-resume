import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Teyssier - Portfolio",
  description: "Portfolio d'Alexandre Teyssier Étudiant Data Engineer & IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter_tight.className}>{children}</body>
    </html>
  );
}
