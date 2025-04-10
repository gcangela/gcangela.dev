import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";


interface TabProps<T> {
    title: string;
    children: ReactNode;
    value: T;
}

export function Tab<T extends string>({ children }: TabProps<T>) {
    return <div className="space-y-4 px-2 sm:px-4 h-full pb-5 overflow-auto">{children}</div>;
}

interface TabsProps<T> {
    children: ReactElement<TabProps<T>>[];
    currentTab: T;
}

export function Tabs<T extends string>({ children, currentTab }: TabsProps<T>) {
    const activeTabElement = children.find((child) => child.props.value === currentTab)?.props.children;
    return (
        <div className="flex flex-col  gap-4 md:gap-4 bg-[var(--background)]">
            <div className="sticky top-[-1px] z-10 flex w-full justify-around border-b bg-[var(--background)] border-gray-300">
                {children.map((tab) => {
                    return <Link
                        key={`about-page-tab: ${tab.props.value}`}
                        href={`?tab=${tab.props.value}`}
                        className={`py-2 text-sm font-medium ${currentTab === tab.props.value ? "border-b-2 border-black dark:border-white text-black dark:text-white" : "text-gray-500"
                            }`}
                    >
                        {tab.props.title}
                    </Link>
                }
                )}
            </div>
            <div className="overflow-auto space-y-4">{activeTabElement}</div>
        </div>
    );
}
