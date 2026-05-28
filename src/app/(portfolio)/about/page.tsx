import { Tab, Tabs } from "@/components/Tabs";
import { tabContent } from "./content";
import { use } from "react";

/** TODO:
 * Migrate tabs to actual routes and use dynamic rendering for the tab state - read directly from params
 * Finish writing the content for all pages
 * Spin up old apps to make video screenshots for the projects page
 * Implement emailing feature using a 3rd party tool
 * Setup app to import different applications and run them as standalone applications
 * Nice to have: do some fancy shit with animations
 * Practice SEO friendly patterns/practices when building out the pages
 * Load projects built with Vuejs as well in the webpage
 */

const aboutPageTabs = ["about", "experience", "education", "skills"] as const;
export type PageTabs = (typeof aboutPageTabs)[number];

type SearchParams = { tab?: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

function getCurrentTab(searchParams: SearchParams): PageTabs {
  const rawTab = Array.isArray(searchParams.tab)
    ? searchParams.tab[0]
    : searchParams.tab;

  return aboutPageTabs.includes(rawTab as PageTabs)
    ? (rawTab as PageTabs)
    : "about";
}

export const dynamic = "force-dynamic";

export default function AboutPage({ searchParams }: Props) {
  const params = use(searchParams);
  const currentTab = getCurrentTab(params);

  return (
    <div className="flex flex-col md:flex-row relative top-0 h-full">
      <div className="flex flex-1">
        <Tabs currentTab={currentTab || "about"}>
          {aboutPageTabs.map((tab) => (
            <Tab
              key={`about-page-tab: ${tab}`}
              title={tabContent[tab].title}
              value={tab}
            >
              {tabContent[tab].content}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
