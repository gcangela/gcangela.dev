import type { Metadata } from "next";
import { ConsultancyPage } from "../ConsultancyPage";
import { contentNl } from "../content/nl";

export const metadata: Metadata = {
  title: contentNl.meta.title,
  description: contentNl.meta.description,
};

export default function CustomConsultancyPageNl() {
  return <ConsultancyPage locale="nl" />;
}
