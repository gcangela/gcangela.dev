import { Tab, Tabs } from "@/components/Tabs";
import { tabContent } from "./content";

const aboutPageTabs = ["about", "experience", "education", "skills"] as const;
export type PageTabs = (typeof aboutPageTabs)[number];

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: PageTabs }>;
}) {
  const params = await searchParams;
  const currentTab =
    params.tab && aboutPageTabs.includes(params.tab) ? params.tab : "about";
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
