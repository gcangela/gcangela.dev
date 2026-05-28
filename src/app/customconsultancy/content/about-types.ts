import type { Locale } from "./types";

export interface AboutPageContent {
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
  title: string;
  subtitle: string;
  paragraphs: string[];
  whoWeServe: {
    title: string;
    items: string[];
  };
  howWeWork: {
    title: string;
    items: string[];
  };
  placeholderNote: string;
}
