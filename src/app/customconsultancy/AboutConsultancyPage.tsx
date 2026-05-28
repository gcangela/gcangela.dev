import Image from "next/image";
import Link from "next/link";
import { ConsultancyShell } from "./ConsultancyShell";
import { getAboutContent, type Locale } from "./content";

const cardClass = "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm";

export function AboutConsultancyPage({ locale }: { locale: Locale }) {
  const page = getAboutContent(locale);

  return (
    <ConsultancyShell locale={locale} languageSwitcher={page.languageSwitcher}>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
                {page.title}
              </h1>
              <p className="text-lg text-slate-600 mb-8">{page.subtitle}</p>
              <div className="space-y-4 text-slate-600">
                {page.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={
                    locale === "en"
                      ? "/customconsultancy#contact"
                      : "/customconsultancy/nl#contact"
                  }
                >
                  <span className="cc-btn-primary cc-btn-primary-lg">
                    {locale === "en" ? "Contact me" : "Neem contact op"}
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-1">
                <div className="h-full w-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/placeholder.svg"
                    alt="Placeholder"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${cardClass} p-6`}>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">{page.whoWeServe.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {page.whoWeServe.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`${cardClass} p-6`}>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">{page.howWeWork.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {page.howWeWork.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-sm text-slate-500 italic max-w-3xl">{page.placeholderNote}</p>
        </div>
      </section>
    </ConsultancyShell>
  );
}
