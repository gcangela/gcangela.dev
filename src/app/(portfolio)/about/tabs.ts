export const aboutPageTabs = ["about", "experience", "education", "skills"] as const;

export type PageTabs = (typeof aboutPageTabs)[number];

export function getCurrentTab(tab: string | null): PageTabs {
  return aboutPageTabs.includes(tab as PageTabs) ? (tab as PageTabs) : "about";
}
