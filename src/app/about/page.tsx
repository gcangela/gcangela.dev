"use client"
import { useTabs } from "@/components/Tabs"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

type PageTabs = "about" | "experience" | "education" | "skills"

export default function About() {
    const searchParams = useSearchParams()
    const router = useRouter();
    const tabFromUrl = searchParams.get("tab") as PageTabs | null

    const { Tab, Tabs } = useTabs<PageTabs>()

    const handleNavigate = (tab: PageTabs) => {
        const newParams = new URLSearchParams()
        newParams.set("tab", tab)
        router.push('/about?' + newParams.toString())
    }


    return <div className="flex justify-center gap-8 flex-col md:flex-row pt-8 ">
        <div className="flex-none justify-center">
            <Image src="/images/giancarlo.png" alt="Giancarlo Angela" width={400} height={300} className="md:w-[400px] w-[300px]" />
        </div>
        <div className="flex-1 mt-8 md:mt-0 overflow-auto md:max-h-[600px] max-h-[300px] md:px-2 px-6 max-w-md">
            <Tabs defaultValue={tabFromUrl || 'about'} onChange={handleNavigate}>
                <Tab title="Me" value="about">
                    <p className="text-sm">Hi, I’m Giancarlo! I love solving problems and building great products.</p>
                </Tab>
                <Tab title="Experience" value="experience">
                    <p className="text-sm">I&apos;ve worked in fast-paced teams to create scalable and user-friendly apps.</p>
                </Tab>
                <Tab title="Education" value="education">
                    <p className="text-sm">I’m self-taught with a background in business, making the switch to tech.</p>
                </Tab>
                <Tab title="Tech Stack" value="skills">
                    <p className="text-sm">I work with React, TypeScript, Tailwind, Go, AWS, and more.</p>
                </Tab>
            </Tabs>
        </div>
    </div>




}