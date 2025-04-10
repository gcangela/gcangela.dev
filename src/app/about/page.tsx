import { Tab, Tabs } from "@/components/Tabs";
import { tabContent } from "./content";

const aboutPageTabs = ["about", "experience", "education", "skills"] as const;
export type PageTabs = (typeof aboutPageTabs)[number];

type SearchParams = { tab?: string | string[] | undefined };

type Props = {
  params: Promise<{ slug: string }>;
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

export default async function AboutPage({ searchParams }: Props) {
  const params = await searchParams;
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
