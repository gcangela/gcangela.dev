import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GCANGELA.DEV",
  description: "Giancarlo Angela's personal website",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased px-0 sm:px-6 flex flex-col h-screen`}
      >
        <Header />
        <main className="mx-auto max-h-[calc(100vh-var(--header-height)-var(--footer-height))] min-h-[calc(100vh-var(--header-height)-var(--footer-height))] font-[family-name:var(--font-geist-sans)] mt-[var(--header-height)] overflow-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
