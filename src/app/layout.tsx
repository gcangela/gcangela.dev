import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GCANGELA.DEV",
  description: "Giancarlo Angela's personal website",
  appleWebApp: true,

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased px-0 sm:px-6`}
      >
        <ThemeProvider>
          <div className="h-screen flex flex-col relative top-0">
            <Header />
            <main className="flex flex-1 flex-shrink-1 overflow-auto my-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
