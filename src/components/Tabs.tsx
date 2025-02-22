"use client";
import React, { useState, ReactElement, ReactNode } from "react";


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
    defaultValue?: T;
    onChange?: (tab: T) => void;
}

export function Tabs<T extends string>({ children, defaultValue, onChange }: TabsProps<T>) {
    const [activeTab, setActiveTab] = useState<T | undefined>(defaultValue);
    const activeTabElement = children.find((child) => child.props.value === activeTab)?.props.children;

    return (
        <div className="flex flex-col size-full gap-4 md:gap-4 bg-[var(--background)]">
            <div className="flex w-full justify-around border-b border-gray-300">
                {children.map((tab) => {
                    return <button
                        key={`about-page-tab: ${tab.props.value}`}
                        onClick={() => {
                            setActiveTab(tab.props.value);
                            if (onChange) {
                                onChange(tab.props.value);
                            }
                        }}
                        className={`py-2 text-sm font-medium ${activeTab === tab.props.value ? "border-b-2 border-black dark:border-white text-black dark:text-white" : "text-gray-500"
                            }`}
                    >
                        {tab.props.title}
                    </button>
                }

                )}
            </div>
            <div className="size-full overflow-auto space-y-4">{activeTabElement}</div>
        </div>
    );
}


export const useTabs = <T extends string>(): {
    Tabs: React.ElementType<TabsProps<T>>;
    Tab: React.ElementType<TabProps<T>>;
} => {
    return {
        Tabs,
        Tab
    }
}    