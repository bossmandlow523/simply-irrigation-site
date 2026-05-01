import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Simply Irrigation LLC | Bradenton, FL",
  description:
    "Professional irrigation installation, repair, and maintenance in Bradenton, Sarasota, and the Gulf Coast. Licensed & insured. Call 941-538-2593 for a free quote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${workSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light text-text-main font-body antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
