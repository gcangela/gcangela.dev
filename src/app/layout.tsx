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
        className={`${firaCode.variable} antialiased px-6 flex flex-col gap-8 h-screen`}
      >
        <Header />
        <main className="font-[family-name:var(--font-geist-sans)] mt-[44px] overflow-auto h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
