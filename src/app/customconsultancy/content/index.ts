import type { AboutPageContent } from "./about-types";
import { aboutPageEn } from "./about-en";
import { aboutPageNl } from "./about-nl";
import type { ConsultancyContent, Locale } from "./types";
import { contentEn } from "./en";
import { contentNl } from "./nl";

const contentByLocale: Record<Locale, ConsultancyContent> = {
  en: contentEn,
  nl: contentNl,
};

const aboutByLocale: Record<Locale, AboutPageContent> = {
  en: aboutPageEn,
  nl: aboutPageNl,
};

export function getContent(locale: Locale): ConsultancyContent {
  return contentByLocale[locale];
}

export function getAboutContent(locale: Locale): AboutPageContent {
  return aboutByLocale[locale];
}

export type { ConsultancyContent, Locale, AboutPageContent };
