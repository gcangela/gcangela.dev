import type { Metadata } from "next";
import { AboutConsultancyPage } from "../../AboutConsultancyPage";
import { aboutPageNl } from "../../content/about-nl";

export const metadata: Metadata = {
  title: aboutPageNl.meta.title,
  description: aboutPageNl.meta.description,
};

export default function CustomConsultancyAboutNl() {
  return <AboutConsultancyPage locale="nl" />;
}
