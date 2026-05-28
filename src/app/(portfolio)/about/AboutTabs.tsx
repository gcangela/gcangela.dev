"use client";

import { useSearchParams } from "next/navigation";
import { Tab, Tabs } from "@/components/Tabs";
import { tabContent } from "./content";
import { getCurrentTab } from "./tabs";

export function AboutTabs() {
  const searchParams = useSearchParams();
  const currentTab = getCurrentTab(searchParams.get("tab"));

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">About</h1>
      <Tabs currentTab={currentTab}>
        {Object.entries(tabContent).map(([key, { title, content }]) => (
          <Tab key={key} title={title} value={key}>
            {content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
