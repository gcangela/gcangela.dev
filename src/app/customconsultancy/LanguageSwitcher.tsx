import Link from "next/link";
import type { ConsultancyContent } from "./content/types";

export function LanguageSwitcher({
  languageSwitcher,
  locale,
}: {
  languageSwitcher: ConsultancyContent["languageSwitcher"];
  locale: ConsultancyContent["locale"];
}) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <Link
        href={languageSwitcher.enHref}
        className={`px-2 py-1 rounded ${
          locale === "en"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-current={locale === "en" ? "page" : undefined}
      >
        {languageSwitcher.enLabel}
      </Link>
      <Link
        href={languageSwitcher.nlHref}
        className={`px-2 py-1 rounded ${
          locale === "nl"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-current={locale === "nl" ? "page" : undefined}
      >
        {languageSwitcher.nlLabel}
      </Link>
    </div>
  );
}
