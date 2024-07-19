import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { twMerge } from "tailwind-merge";
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
      <body className={twMerge(inter_tight.className, "bg-primary")}>{children}</body>
    </html>
  );
}
