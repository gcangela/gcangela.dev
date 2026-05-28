import { Suspense } from "react";
import { AboutTabs } from "./AboutTabs";

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="flex flex-col gap-4">Loading…</div>}>
      <AboutTabs />
    </Suspense>
  );
}
