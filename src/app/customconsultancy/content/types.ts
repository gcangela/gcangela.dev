export type Locale = "en" | "nl";

export type ServiceIconKey =
  | "globe"
  | "file"
  | "warehouse"
  | "refund"
  | "scale"
  | "shield"
  | "building"
  | "audit";

export interface NavLink {
  href: string;
  label: string;
}

export interface ConceptItem {
  title: string;
  description: string;
}

export interface TopicSubsection {
  title: string;
  items: string[];
}

export interface TopicBlock {
  title: string;
  subsections: TopicSubsection[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export interface ServiceItem {
  icon: ServiceIconKey;
  title: string;
  description: string;
}

export interface ContactFormLabels {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  successMessage: string;
}

export interface ConsultancyContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  languageSwitcher: {
    enLabel: string;
    nlLabel: string;
    enHref: string;
    nlHref: string;
  };
  brandName: string;
  nav: NavLink[];
  ctaGetStarted: string;
  hero: {
    title: string;
    titleHighlight: string;
    subcopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
    coverageTitle: string;
    coverageItems: string[];
  };
  concepts: {
    title: string;
    subtitle: string;
    items: ConceptItem[];
  };
  importProcess: {
    title: string;
    subtitle: string;
    steps: string[];
  };
  services: {
    title: string;
    subtitle: string;
    riskHighlights: {
      title: string;
      complianceRisksTitle: string;
      complianceRisks: string[];
      commonMistakesTitle: string;
      commonMistakes: string[];
    };
    items: ServiceItem[];
  };
  topics: {
    title: string;
    subtitle: string;
    blocks: TopicBlock[];
  };
  faq: {
    title: string;
    subtitle: string;
    groups: FaqGroup[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    officeLabel: string;
    email: string;
    phone: string;
    officeLines: string[];
  };
  form: ContactFormLabels;
  footer: {
    tagline: string;
    servicesTitle: string;
    servicesLinks: { label: string; href: string }[];
    companyTitle: string;
    companyLinks: { label: string; href: string }[];
    contactTitle: string;
    contactLines: string[];
    copyright: string;
  };
}
