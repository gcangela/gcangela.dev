import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropsWithChildren } from "react";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex flex-col relative top-0 px-0 sm:px-6">
      <Header />
      <main className="flex flex-1 overflow-auto my-10 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
