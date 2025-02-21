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
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={`${firaCode.variable} antialiased px-0 sm:px-6 h-full`}
      >
        <div className="grid grid-rows-[var(--header-height)_auto_var(--footer-height)] h-full">
          <Header />
          <main className="h-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
