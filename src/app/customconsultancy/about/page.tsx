import type { Metadata } from "next";
import { AboutConsultancyPage } from "../AboutConsultancyPage";
import { aboutPageEn } from "../content/about-en";

export const metadata: Metadata = {
  title: aboutPageEn.meta.title,
  description: aboutPageEn.meta.description,
};

export default function CustomConsultancyAboutEn() {
  return <AboutConsultancyPage locale="en" />;
}
