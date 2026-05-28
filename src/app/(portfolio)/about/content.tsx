import { ContentBlock } from "@/components/ContentBlock";
import { PageTabs } from "./page";
import { ReactNode } from "react";

export const tabContent: Record<PageTabs, { title: string, content: ReactNode }> = {
    about: {
        title: "About Me",
        content: <>
            <ContentBlock title="From Finance to Tech">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock>
            <ContentBlock title="7 Years of Real-World Experience">
                <p>
                    Over the past <strong>seven years</strong>, I’ve worked in <strong>various teams</strong> across multiple products that real customers rely on.
                    This experience has given me a strong understanding of how to develop <strong>scalable, user-friendly applications</strong>
                    while collaborating with cross-functional teams.
                </p>
            </ContentBlock>
            <ContentBlock title="Building Scalable and Maintainable Software">
                <p>
                    I believe great development isn’t just about writing code—it’s about <strong>engineering solutions that last</strong>.
                    Whether it’s designing clean, maintainable architectures, optimizing UI performance, or ensuring a seamless user experience,
                    I approach every challenge with <strong>precision and a problem-solving mindset</strong>.
                </p>
            </ContentBlock>
            <ContentBlock title="An Analytical and Strategic Mindset">
                <p>
                    With a background in finance, I bring a <strong>structured, analytical approach</strong> to development.
                    I enjoy breaking down complex challenges, improving efficiency, and delivering <strong>high-quality, scalable software</strong>
                    that makes a real impact.
                </p>
            </ContentBlock>
            <ContentBlock title="Let’s Connect">
                <p>
                    If you’re looking for a <strong>frontend developer</strong> with a mix of <strong>technical expertise, adaptability, and real-world experience</strong>,
                    let’s connect! 🚀
                </p>
            </ContentBlock>
        </>
    },
    experience: {
        title: 'Experience',
        content: <>
            <ContentBlock title="Bird - 2018-2025">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock>
            <ContentBlock title="Deskbookers - 2016-2017">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock>
            <ContentBlock title="3D Hubs(HUBS) - 2016-2017">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock>
        </>
    },
    education: {
        title: 'Education',
        content: <>
            <ContentBlock title="Self-taught Web Developer">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh euismod, pulvinar ex nec, volutpat sem. Vivamus suscipit faucibus augue, convallis pretium tellus pulvinar non. Praesent eget convallis sapien. Fusce fringilla libero turpis, in dignissim tellus sollicitudin eget. Nam quis tellus sit amet lacus dictum aliquam nec non est. Suspendisse mattis a tellus sit amet volutpat. Phasellus eget sapien in turpis bibendum aliquam. Maecenas convallis nec erat nec tincidunt. Ut sagittis eleifend massa ut volutpat. Nam molestie eu orci id interdum. Suspendisse augue ante, laoreet ac rhoncus vitae, feugiat faucibus leo. Phasellus tincidunt, arcu ut ultricies porta, nisi orci feugiat orci, quis mattis nisi diam ut nunc.
                </p>
            </ContentBlock>

            <ContentBlock title="Avans University of Applied Sciences - 2011-2017">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh euismod, pulvinar ex nec, volutpat sem. Vivamus suscipit faucibus augue, convallis pretium tellus pulvinar non. Praesent eget convallis sapien. Fusce fringilla libero turpis, in dignissim tellus sollicitudin eget. Nam quis tellus sit amet lacus dictum aliquam nec non est. Suspendisse mattis a tellus sit amet volutpat. Phasellus eget sapien in turpis bibendum aliquam. Maecenas convallis nec erat nec tincidunt. Ut sagittis eleifend massa ut volutpat. Nam molestie eu orci id interdum. Suspendisse augue ante, laoreet ac rhoncus vitae, feugiat faucibus leo. Phasellus tincidunt, arcu ut ultricies porta, nisi orci feugiat orci, quis mattis nisi diam ut nunc.
                </p>
            </ContentBlock>

            <ContentBlock title="Colegio Arubano - 2003-2010">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh euismod, pulvinar ex nec, volutpat sem. Vivamus suscipit faucibus augue, convallis pretium tellus pulvinar non. Praesent eget convallis sapien. Fusce fringilla libero turpis, in dignissim tellus sollicitudin eget. Nam quis tellus sit amet lacus dictum aliquam nec non est. Suspendisse mattis a tellus sit amet volutpat. Phasellus eget sapien in turpis bibendum aliquam. Maecenas convallis nec erat nec tincidunt. Ut sagittis eleifend massa ut volutpat. Nam molestie eu orci id interdum. Suspendisse augue ante, laoreet ac rhoncus vitae, feugiat faucibus leo. Phasellus tincidunt, arcu ut ultricies porta, nisi orci feugiat orci, quis mattis nisi diam ut nunc.
                </p>
            </ContentBlock></>
    },
    skills: {
        title: 'Skills',
        content: <>
            <ContentBlock title="Frontend">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock>
            <ContentBlock title="Backend">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock>
            <ContentBlock title="Spoken Languages">
                <p>
                    Hi, I’m <strong>Giancarlo</strong>, a web developer originally from <strong>Aruba</strong>, now based in <strong>the Netherlands</strong>.
                    My path to software development wasn’t a straight line—I started my career in <strong>finance</strong> before making the switch to tech.
                    But once I discovered my passion for building software, I never looked back.
                </p>
            </ContentBlock></>
    }
}