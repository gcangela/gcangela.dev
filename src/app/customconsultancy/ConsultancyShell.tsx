import Link from "next/link";
import { getContent, type Locale } from "./content";
import type { ConsultancyContent } from "./content/types";
import { FooterLogo, Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

function ShellNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
    >
      {label}
    </Link>
  );
}

export function ConsultancyShell({
  locale,
  languageSwitcher,
  children,
}: {
  locale: Locale;
  languageSwitcher?: ConsultancyContent["languageSwitcher"];
  children: React.ReactNode;
}) {
  const c = getContent(locale);
  const switcher = languageSwitcher ?? c.languageSwitcher;
  const contactHref =
    locale === "en" ? "/customconsultancy#contact" : "/customconsultancy/nl#contact";
  const year = new Date().getFullYear();
  const homeHref = locale === "en" ? "/customconsultancy" : "/customconsultancy/nl";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <Link href={homeHref} className="shrink-0">
              <Logo brandName={c.brandName} />
            </Link>
            <div className="flex items-center gap-3 shrink-0">
              <LanguageSwitcher languageSwitcher={switcher} locale={locale} />
              <Link href={contactHref} className="hidden md:inline-flex">
                <span className="cc-btn-primary">{c.ctaGetStarted}</span>
              </Link>
            </div>
          </div>
          <nav className="flex gap-4 overflow-x-auto pb-1 text-sm">
            {c.nav.map((link) => (
              <ShellNavLink key={link.href + link.label} href={link.href} label={link.label} />
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <LanguageSwitcher languageSwitcher={switcher} locale={locale} />
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Link href={homeHref}>
                  <FooterLogo brandName={c.brandName} />
                </Link>
              </div>
              <p className="text-slate-400 text-sm">{c.footer.tagline}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{c.footer.servicesTitle}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {c.footer.servicesLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{c.footer.companyTitle}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {c.footer.companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{c.footer.contactTitle}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {c.footer.contactLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>
              &copy; {year} {c.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
