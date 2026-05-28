import type { Metadata } from "next";
import { ConsultancyPage } from "./ConsultancyPage";
import { contentEn } from "./content/en";

export const metadata: Metadata = {
  title: contentEn.meta.title,
  description: contentEn.meta.description,
};

export default function CustomConsultancyPageEn() {
  return <ConsultancyPage locale="en" />;
}
