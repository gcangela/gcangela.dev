import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { ConsultancyShell } from "./ConsultancyShell";
import { getContent, type Locale } from "./content";
import {
  IconArrowRight,
  IconCheckCircle,
  IconChevronDown,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTrendingUp,
  IconUsers,
  ServiceIcon,
} from "./icons";

const cardClass = "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm";

const aboutCardIcons = [IconCheckCircle, IconTrendingUp, IconUsers] as const;

export function ConsultancyPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <ConsultancyShell locale={locale}>
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                {c.hero.title}
                <span className="text-blue-600"> {c.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">{c.hero.subcopy}</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <span className="cc-btn-primary cc-btn-primary-lg">
                    {c.hero.ctaPrimary} <IconArrowRight />
                  </span>
                </a>
                <a href="#services">
                  <span className="cc-btn-outline cc-btn-outline-lg">{c.hero.ctaSecondary}</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-1">
                <div className="h-full w-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/placeholder.svg"
                    alt="Placeholder"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-cover" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.about.title}</h2>
            <p className="text-lg text-slate-600">{c.about.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {c.about.cards.map((card, i) => {
              const Icon = aboutCardIcons[i] ?? IconCheckCircle;
              return (
                <div key={card.title} className={cardClass}>
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold leading-none tracking-tight">{card.title}</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-slate-600">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${cardClass} max-w-3xl mx-auto p-6`}>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">{c.about.coverageTitle}</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              {c.about.coverageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="concepts" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.concepts.title}</h2>
            <p className="text-lg text-slate-600">{c.concepts.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.concepts.items.map((item) => (
              <div key={item.title} className={cardClass + " p-6"}>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="import-process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {c.importProcess.title}
            </h2>
            <p className="text-lg text-slate-600">{c.importProcess.subtitle}</p>
          </div>
          <ol className="max-w-3xl mx-auto space-y-4">
            {c.importProcess.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                  {index + 1}
                </span>
                <p className="text-slate-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.services.title}</h2>
            <p className="text-lg text-slate-600">{c.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {c.services.items.map((service) => (
              <div
                key={service.title}
                className={`${cardClass} border-2 hover:border-blue-300 transition-colors`}
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-white">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-none tracking-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-base text-slate-500">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${cardClass} p-6 bg-slate-50/50`}>
            <h3 className="text-lg font-semibold text-slate-900 mb-6">{c.services.riskHighlights.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">
                  {c.services.riskHighlights.complianceRisksTitle}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {c.services.riskHighlights.complianceRisks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-3">
                  {c.services.riskHighlights.commonMistakesTitle}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                  {c.services.riskHighlights.commonMistakes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.topics.title}</h2>
            <p className="text-lg text-slate-600">{c.topics.subtitle}</p>
          </div>
          <div className="space-y-4">
            {c.topics.blocks.map((block) => (
              <details key={block.title} className="border border-slate-200 rounded-lg px-6 group">
                <summary className="flex items-center justify-between py-4 font-semibold text-left text-slate-900">
                  {block.title}
                  <IconChevronDown />
                </summary>
                <div className="pb-4 space-y-6">
                  {block.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h4 className="font-medium text-slate-900 mb-2">{sub.title}</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                        {sub.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.faq.title}</h2>
            <p className="text-lg text-slate-600">{c.faq.subtitle}</p>
          </div>
          <div className="space-y-10">
            {c.faq.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{group.title}</h3>
                <div className="space-y-4">
                  {group.items.map((faq) => (
                    <details
                      key={faq.question}
                      className="border border-slate-200 rounded-lg px-6 bg-white group"
                    >
                      <summary className="flex items-center justify-between py-4 font-semibold text-left text-slate-900">
                        {faq.question}
                        <IconChevronDown />
                      </summary>
                      <div className="pb-4 text-slate-600">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{c.contact.title}</h2>
              <p className="text-lg text-slate-600">{c.contact.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ContactForm labels={c.form} />
              <div className="space-y-6">
                <div className={cardClass}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <IconMail className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{c.contact.emailLabel}</h3>
                        <a
                          href={`mailto:${c.contact.email}`}
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          {c.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cardClass}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <IconPhone className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{c.contact.phoneLabel}</h3>
                        <a
                          href={`tel:${c.contact.phone.replace(/\s/g, "")}`}
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          {c.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cardClass}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <IconMapPin className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{c.contact.officeLabel}</h3>
                        <p className="text-slate-600">
                          {c.contact.officeLines.map((line, i) => (
                            <span key={line}>
                              {i > 0 && <br />}
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConsultancyShell>
  );
}
