import type { ConsultancyContent } from "./types";

export const contentEn: ConsultancyContent = {
  locale: "en",
  meta: {
    title: "Attentive Customs Consulting | Aruba",
    description:
      "Independent customs consultant in Aruba for import companies and regular importers. Support for ASYCUDA, entrepot, refunds, objections, and exemptions.",
  },
  languageSwitcher: {
    enLabel: "EN",
    nlLabel: "NL",
    enHref: "/customconsultancy",
    nlHref: "/customconsultancy/nl",
  },
  brandName: "attentive",
  nav: [
    { href: "/customconsultancy#what-we-cover", label: "Advisory topics" },
    { href: "/customconsultancy/about", label: "About" },
    { href: "/customconsultancy#concepts", label: "Importer basics" },
    { href: "/customconsultancy#import-process", label: "Import process" },
    { href: "/customconsultancy#services", label: "Services" },
    { href: "/customconsultancy#topics", label: "Topics" },
    { href: "/customconsultancy#faq", label: "FAQ" },
  ],
  ctaGetStarted: "Contact me",
  hero: {
    title: "Independent customs consultant",
    titleHighlight: "in Aruba",
    subcopy:
      "I support import companies and businesses that import regularly—ASYCUDA, entrepot, refunds, objections, and Article 128 exemptions. Engagements are agreed per project or as ongoing contract support.",
    ctaPrimary: "Contact me",
    ctaSecondary: "View services",
  },
  about: {
    title: "What I advise on",
    subtitle:
      "Practical guidance on Aruba customs law, import processes, and the obligations your company carries as an importer.",
    cards: [
      {
        title: "Regulatory clarity",
        description:
          "Understand the legal obligations behind each customs step, from arrival and declaration through release of goods.",
      },
      {
        title: "Risk and accountability",
        description:
          "See where your company is responsible, what non-compliance can cost, and how to align with Departamento di Aduana requirements.",
      },
      {
        title: "Practical compliance",
        description:
          "Meet minimum requirements per process with documented controls, oversight of broker filings, and records you can defend in an audit.",
      },
    ],
    coverageTitle: "Typical advisory topics",
    coverageItems: [
      "Bonded warehouse (entrepot) system and administrative requirements",
      "Objections, appeals, and refunds of overpaid import duties",
      "Exemptions and establishing a trading company in Aruba",
      "Practical measures to avoid fines, delays, and reassessments",
      "Internal controls and audit trails",
      "Consequences of non-compliance",
    ],
  },
  concepts: {
    title: "Key concepts for importers",
    subtitle: "Essential terms and obligations every importer should understand in Aruba.",
    items: [
      {
        title: "HS code (goods code)",
        description:
          "The correct classification determines the applicable tariff and import duties. Errors can lead to overpayment, underpayment, and penalties.",
      },
      {
        title: "Customs value",
        description:
          "Duties are calculated on the customs value, including transaction value and permitted adjustments. Incorrect valuation affects all downstream charges.",
      },
      {
        title: "ASYCUDA declaration",
        description:
          "Import declarations must be filed timely and accurately in ASYCUDA. Delays or errors can hold goods and trigger enforcement action.",
      },
      {
        title: "Preferential origin",
        description:
          "Where rules are met, preferential origin can reduce import duties. Supporting proof must be complete and consistent with the declaration.",
      },
      {
        title: "Permits and special regimes",
        description:
          "Certain goods require permits (special regimes, CITES, dual-use). Operating without the correct authorization invalidates the declaration.",
      },
      {
        title: "Supporting documents",
        description:
          "Invoices, packing lists, transport documents, and bills of lading must align with the declaration and be retained for audit.",
      },
      {
        title: "Importer number",
        description:
          "Every importer must hold a valid importer number for import activities in Aruba.",
      },
      {
        title: "Certified customs declarants",
        description:
          "Licensed declarants file on your behalf; your company remains responsible for the accuracy of information provided to customs.",
      },
    ],
  },
  importProcess: {
    title: "Standard import process",
    subtitle: "Overview of the typical import flow from arrival to release in Aruba.",
    steps: [
      "Arrival of goods → summary declaration (ASYCUDA clearance)",
      "Unloading under customs supervision (risk profile: green, orange, or red)",
      "Temporary storage at the port or airport RTO (aerocargo)",
      "Submit import declaration or placement under a special regime",
      "Payment or security of import duties, excise, BBO, and BAZV",
      "Transport to a bonded warehouse or private entrepot",
      "Release of goods (customs clearance)",
    ],
  },
  services: {
    title: "Services",
    subtitle:
      "Scoped per project or as ongoing contract support for companies that import into Aruba.",
    riskHighlights: {
      title: "Compliance risks at a glance",
      complianceRisksTitle: "Risks of non-compliance",
      complianceRisks: [
        "Reassessments and back-duty claims",
        "Fines and criminal prosecution",
        "Withdrawal of permits (entrepot, RTO)",
        "Supply chain delays",
        "Reputational damage",
      ],
      commonMistakesTitle: "Common mistakes",
      commonMistakes: [
        "Incorrect HS code → over- or under-paid duties",
        "Incorrect origin → loss of preference",
        "Stock administration errors → fines and surcharges",
        "Incorrect internal transfers between entrepots",
      ],
    },
    items: [
      {
        icon: "globe",
        title: "Import process & ASYCUDA support",
        description:
          "Help for import companies navigating arrival, ASYCUDA declarations, payment, storage, and release of goods.",
      },
      {
        icon: "file",
        title: "Customs compliance support",
        description:
          "Classification, valuation, documentation, broker oversight, excise goods, and permit conditions for warehouses and exemptions.",
      },
      {
        icon: "warehouse",
        title: "Bonded warehouse (entrepot)",
        description:
          "For operators and importers using entrepots: administration, stock records, reporting, and excise/non-excise separation.",
      },
      {
        icon: "refund",
        title: "Duty refunds (restitutie)",
        description:
          "Review of your case and preparation of refund requests when import duties were overpaid under Aruban law.",
      },
      {
        icon: "scale",
        title: "Objections & appeals",
        description:
          "Help drafting objections (bezwaar), appeals to the Raad van Beroep Belastingzaken, and substantiated corrections.",
      },
      {
        icon: "shield",
        title: "Article 128 exemptions",
        description:
          "Guidance on in-, out-, and transit exemptions: eligibility, applications to the Inspector, and required documents.",
      },
      {
        icon: "building",
        title: "Starting as an importer",
        description:
          "Support for new trading companies: KvK registration, importer number, ASYCUDA, entrepot permits, and first declarations.",
      },
      {
        icon: "audit",
        title: "Compliance reviews",
        description:
          "Periodic review of classifications, broker filings, and internal controls—practical recommendations before customs finds issues.",
      },
    ],
  },
  topics: {
    title: "Topic guides",
    subtitle:
      "Reference material I use with clients—obligations, procedures, and what Departamento di Aduana expects.",
    blocks: [
      {
        title: "Compliance obligations for trading companies",
        subsections: [
          {
            title: "Your obligations",
            items: [
              "Correct classification of goods",
              "Accurate customs value and complete documentation",
              "Retention of all records for at least five years",
              "Internal controls on broker declarations",
              "Timely and correct reporting of excise goods",
              "Compliance with permit conditions (entrepot, AGP, storage facilities, exemptions, etc.)",
            ],
          },
        ],
      },
      {
        title: "Bonded warehouse (entrepot) system",
        subsections: [
          {
            title: "What is an entrepot?",
            items: [
              "A customs-licensed facility where goods are stored under suspension of import duties, excise, BBO, and BAZV.",
              "Types include open entrepots and private entrepots.",
            ],
          },
          {
            title: "Benefits",
            items: [
              "Deferral of import duty payment",
              "Re-export without payment of duties where applicable",
              "Flexible inventory management for trading companies",
            ],
          },
          {
            title: "Operator obligations",
            items: [
              "Per-item administration and real-time stock records",
              "Registration of inbound, outbound, and transfers",
              "Monthly and annual reports to customs",
              "Physical security and access control",
              "Separation of excise and non-excise goods",
            ],
          },
          {
            title: "Common errors",
            items: [
              "Incorrect stock balances",
              "Incorrect internal transfers",
              "Unregistered destructions",
              "Incorrect excise calculations",
            ],
          },
          {
            title: "What customs verifies",
            items: [
              "Administration matches physical stock",
              "All movements are traceable",
              "Permit conditions are met",
              "Excise goods are correctly accounted for",
            ],
          },
          {
            title: "Best practices",
            items: [
              "Periodic cycle counts",
              "Internal audits",
              "Clear physical separation of goods",
              "Reconciliation of documents vs. physical stock",
            ],
          },
        ],
      },
      {
        title: "Duty refunds (restitutie)",
        subsections: [
          {
            title: "When a refund may be possible",
            items: [
              "Overpayment: wrong HS code, incorrect customs value, preference not applied, goods destroyed under customs supervision, double payment, or administrative error",
              "Goods not imported as declared: returned to sender, not arrived, or destroyed under supervision",
              "Exemption should have applied: household effects, diplomatic exemption, or other statutory categories",
              "Import duties or excise calculated too high due to valuation or calculation errors",
            ],
          },
        ],
      },
      {
        title: "Objections and appeals",
        subsections: [
          {
            title: "When to file",
            items: [
              "Incorrect tariff classification",
              "Incorrect customs value",
              "Incorrect excise calculation",
              "Incorrect application of origin or preference",
              "Unjustified reassessment",
            ],
          },
          {
            title: "Procedure in Aruba",
            items: [
              "File an objection (bezwaar) within the statutory period",
              "Customs reviews the objection",
              "If rejected → appeal to the Raad van Beroep Belastingzaken",
              "Further appeal may be possible",
            ],
          },
          {
            title: "A strong objection letter includes",
            items: [
              "Reference to the declaration",
              "Factual substantiation",
              "Legal basis (law, tariff, origin rules)",
              "Supporting evidence",
            ],
          },
          {
            title: "Required documents",
            items: [
              "Original declaration",
              "Invoice and bill of lading",
              "Proof of payment",
              "Corrected calculation",
              "Refund request letter where applicable",
            ],
          },
          {
            title: "Critical deadlines",
            items: [
              "Generally one year from the date of payment",
              "Reassessment within five years after payment of duties",
            ],
          },
        ],
      },
      {
        title: "Article 128 exemption (in-, out-, and transit)",
        subsections: [
          {
            title: "Application procedure",
            items: [
              "Exemption only where legally permitted",
              "Written application to the Inspector of Departamento di Aduana",
              "Clearly state purpose and intended recipient of the goods",
              "Often based on economic, social, humanitarian, or cultural grounds",
              "Exemption is personal; written authorization may be granted",
              "Granted only on written request",
              "A declaration is always required, even when exempt",
            ],
          },
          {
            title: "Required documents",
            items: [
              "Exemption application form",
              "Specification of goods (e.g. machinery)",
              "Proof of destination and use",
              "Authorizations where applicable",
            ],
          },
        ],
      },
      {
        title: "Establishing a trading company",
        subsections: [
          {
            title: "Customs steps",
            items: [
              "Registration with the Chamber of Commerce and Aruba Tax Administration",
              "Mandatory importer number for import activities",
              "Administrative system for customs declarations",
              "Entrepot permit application with Departamento di Aduana if applicable",
              "Import declarations via ASYCUDA",
              "Payment of import duties, excise, BBO, and BAZV per applicable rates",
              "Ongoing compliance with permit conditions and customs legislation",
              "Periodic reports and customs audits",
              "Violations may result in warnings, fines, or permit withdrawal",
            ],
          },
        ],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Common questions from import companies and regular importers in Aruba.",
    groups: [
      {
        title: "Working with Attentive",
        items: [
          {
            question: "What type of consultancy is Attentive?",
            answer:
              "Independent customs advisory for Aruba. You work with the same consultant throughout your assignment. Engagements are agreed per project or under contract, with scope and fees set in advance.",
          },
          {
            question: "Who do you typically work with?",
            answer:
              "Import companies and trading businesses that bring goods into Aruba, including those with recurring import activity, entrepot operations, or periodic need for specialist customs advice.",
          },
          {
            question: "How are engagements structured?",
            answer:
              "By agreement per assignment: a single consultation, a defined project (for example a restitutie file or compliance review), or a contract for ongoing support. Scope, deliverables, and fees are agreed in advance.",
          },
        ],
      },
      {
        title: "General and compliance",
        items: [
          {
            question:
              "What are my minimum compliance obligations as a trading company in Aruba?",
            answer:
              "You must classify goods correctly, declare the right customs value, file timely ASYCUDA declarations, retain documents for at least five years, monitor broker filings, report excise goods accurately, and comply with all permit conditions for entrepots, storage, and exemptions.",
          },
          {
            question: "What happens if we are non-compliant?",
            answer:
              "Consequences can include reassessments, fines, criminal prosecution, withdrawal of entrepot or RTO permits, supply chain delays, and reputational harm. Proactive controls reduce exposure before customs initiates action.",
          },
          {
            question: "What are the most common customs mistakes importers make?",
            answer:
              "Typical errors include wrong HS codes, incorrect origin claims, poor stock administration in entrepots, and incorrect internal transfers between bonded facilities—each can trigger surcharges, fines, or loss of preferential treatment.",
          },
        ],
      },
      {
        title: "Import and documentation",
        items: [
          {
            question: "Why does the HS code matter for my shipment?",
            answer:
              "The HS code determines the tariff rate and duty amount. A wrong code leads to over- or under-payment and may be corrected through reassessment, refunds, or objections.",
          },
          {
            question: "What documents must I retain and for how long?",
            answer:
              "Retain invoices, packing lists, transport documents, bills of lading, declarations, and related correspondence for at least five years. They must support the declared classification, value, and origin.",
          },
          {
            question: "What is an importer number and when do I need it?",
            answer:
              "An importer number is mandatory for any company carrying out import activities in Aruba. It is obtained as part of registration and customs onboarding.",
          },
        ],
      },
      {
        title: "Bonded warehouse (entrepot)",
        items: [
          {
            question: "What is a bonded warehouse and what are the benefits?",
            answer:
              "A customs-licensed entrepot stores goods under suspension of import duties, excise, BBO, and BAZV. Benefits include duty deferral, possible re-export without duty, and flexible inventory management.",
          },
          {
            question: "What administrative obligations apply to entrepot operators?",
            answer:
              "Operators need per-item records, real-time stock administration, inbound/outbound/transfer logging, periodic customs reports, physical security, and separation of excise and non-excise goods.",
          },
          {
            question: "What does customs verify during stock controls?",
            answer:
              "Customs checks that records match physical stock, all movements are traceable, permit conditions are met, and excise goods are correctly reported.",
          },
        ],
      },
      {
        title: "Refunds, objections, and exemptions",
        items: [
          {
            question: "When can I request a refund of overpaid import duties in Aruba?",
            answer:
              "Under the Landsverordening Tarief van Invoerrechten and internal customs procedures, refunds may apply for overpayment, goods not imported as declared, exemptions that should have applied, or duties calculated too high—each case requires proper documentation.",
          },
          {
            question: "How do objection and appeal procedures work?",
            answer:
              "You file an objection within the legal term; customs decides. If rejected, you may appeal to the Raad van Beroep Belastingzaken. Strong filings reference the declaration, facts, law, and evidence.",
          },
          {
            question: "How do I apply for an Article 128 exemption?",
            answer:
              "Submit a written application to the Inspector of Departamento di Aduana, stating purpose and recipient, with the exemption form, goods specification, proof of destination and use, and any required authorizations. A declaration is still required.",
          },
          {
            question: "What are the critical deadlines for refunds and objections?",
            answer:
              "Refund requests are generally subject to a one-year limit from payment; reassessments may occur within five years after duties were paid. Specific cases should be reviewed against current law and your declaration dates.",
          },
        ],
      },
      {
        title: "Starting a business",
        items: [
          {
            question:
              "What customs steps are required to establish a trading company in Aruba?",
            answer:
              "Register with the Chamber of Commerce and Tax Administration, obtain an importer number, set up declaration processes, apply for entrepot permits if needed, file via ASYCUDA, pay duties and taxes as due, and maintain reporting and permit compliance under customs supervision.",
          },
        ],
      },
    ],
  },
  contact: {
    title: "Get in touch",
    subtitle:
      "Import company or regular importer in Aruba? Describe your question or assignment—I will reply with whether and how I can help.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    officeLabel: "Office",
    email: "info@attentivecustoms.com",
    phone: "+297 000 0000",
    officeLines: ["Oranjestad", "Aruba"],
  },
  form: {
    title: "Send a message",
    subtitle: "Complete the form and I will respond within one business day.",
    name: "Name",
    email: "Email",
    company: "Company",
    message: "Message",
    submit: "Send message",
    successMessage: "Thank you for your message. I will be in touch soon.",
  },
  footer: {
    tagline:
      "Independent customs consultancy in Aruba for import companies and businesses that import regularly.",
    servicesTitle: "Services",
    servicesLinks: [
      { label: "Import & ASYCUDA", href: "/customconsultancy#services" },
      { label: "Compliance programs", href: "/customconsultancy#services" },
      { label: "Bonded warehouse", href: "/customconsultancy#services" },
      { label: "Refunds & objections", href: "/customconsultancy#services" },
    ],
    companyTitle: "Company",
    companyLinks: [
      { label: "About Attentive", href: "/customconsultancy/about" },
      { label: "Advisory topics", href: "/customconsultancy#what-we-cover" },
      { label: "Importer basics", href: "/customconsultancy#concepts" },
      { label: "Topic guides", href: "/customconsultancy#topics" },
      { label: "FAQ", href: "/customconsultancy#faq" },
      { label: "Contact", href: "/customconsultancy#contact" },
    ],
    contactTitle: "Contact",
    contactLines: ["info@attentivecustoms.com", "+297 000 0000", "Aruba"],
    copyright: "Attentive Customs Consulting. All rights reserved.",
  },
};
