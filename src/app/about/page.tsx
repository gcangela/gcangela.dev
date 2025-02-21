"use client"
import { ContentBlock } from "@/components/ContentBlock"
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
        router.push('/about?' + newParams.toString(), { scroll: false })
    }


    return <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 max-w-7xl mx-auto max-h-full sm:max-h-[600px]">
        <div className="size-full max-h-[inherit] flex items-center justify-center">
            <div className="bg-custom-mobile-image h-40 w-40 rounded-full bg-cover md:hidden bg-top" />
            <Image src="/images/giancarlo.png" alt="Giancarlo Angela" width={400} height={300} className="hidden md:block md:w-[400px] sm:w-[300px] w-[280px] mx-auto rounded-md" />
        </div>
        <div className="size-full max-h-[inherit]  mb-[var(--footer-height)]">
            <Tabs defaultValue={tabFromUrl || 'about'} onChange={handleNavigate}>
                <Tab title="About Me" value="about">
                    <div className="space-y-4 px-4 h-full pb-5">
                        <section>
                            <ContentBlock title="From Finance to Tech">
                                <p>
                                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                                    But once I discovered my passion for building software, I never looked back.
                                </p>
                            </ContentBlock>
                        </section>
                        <section>
                            <ContentBlock title="7 Years of Real-World Experience">
                                <p>
                                    Over the past <strong>seven years</strong>, I’ve worked in <strong>various teams</strong> across multiple products that real customers rely on.
                                    This experience has given me a strong understanding of how to develop <strong>scalable, user-friendly applications</strong>
                                    while collaborating with cross-functional teams.
                                </p>
                            </ContentBlock>
                        </section>


                        <section>
                            <ContentBlock title="Building Scalable and Maintainable Software">
                                <p>
                                    I believe great development isn’t just about writing code—it’s about <strong>engineering solutions that last</strong>.
                                    Whether it’s designing clean, maintainable architectures, optimizing UI performance, or ensuring a seamless user experience,
                                    I approach every challenge with <strong>precision and a problem-solving mindset</strong>.
                                </p>
                            </ContentBlock>
                        </section>


                        <section>
                            <ContentBlock title="An Analytical and Strategic Mindset">
                                <p>
                                    With a background in finance, I bring a <strong>structured, analytical approach</strong> to development.
                                    I enjoy breaking down complex challenges, improving efficiency, and delivering <strong>high-quality, scalable software</strong>
                                    that makes a real impact.
                                </p>
                            </ContentBlock>
                        </section>


                        <section>
                            <ContentBlock title="Let’s Connect">
                                <p>
                                    If you’re looking for a <strong>frontend developer</strong> with a mix of <strong>technical expertise, adaptability, and real-world experience</strong>,
                                    let’s connect! 🚀
                                </p>
                            </ContentBlock>

                        </section>
                    </div>
                </Tab>
                <Tab title="Experience" value="experience">
                    <div className="space-y-4 px-4 h-full">
                        <section>
                            <ContentBlock title="From Finance to Tech">
                                <p>
                                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                                    But once I discovered my passion for building software, I never looked back.
                                </p>
                            </ContentBlock>
                        </section>

                    </div>
                </Tab>
                <Tab title="Education" value="education">
                    <p className="text-sm">I’m self-taught with a background in business, making the switch to tech.</p>
                </Tab>
                <Tab title="Skills" value="skills">
                    <p className="text-sm">hehehe</p>
                </Tab>
            </Tabs >
        </div >
    </div >




}