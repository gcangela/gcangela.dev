import { FC, PropsWithChildren, ReactNode } from "react";

interface ContentBlockProps {
    title: ReactNode;
    className?: string;

}
export const ContentBlock: FC<PropsWithChildren<ContentBlockProps>> = ({ title, children, className }) => {
    return (
        <section className={`bg-[var(--background)] ${className ?? ''}`}>
            <div className="block space-y-4 z-2 relative px-2 md:px-0 md:pr-4">
                <div className="sticky top-0  bg-[var(--background)]">
                    <h1 className="text-lg md:text-xl font-bold underline underline-offset-2">
                        {title}
                    </h1>
                </div>
                <div className="h-full text-sm md:text-lg">{children}</div>
            </div>
        </section>

    )
}