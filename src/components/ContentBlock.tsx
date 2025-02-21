import { FC, PropsWithChildren, ReactNode } from "react";

interface ContentBlockProps {
    title: ReactNode;

}
export const ContentBlock: FC<PropsWithChildren<ContentBlockProps>> = ({ title, children }) => {
    return (
        <div className="block space-y-4 z-2 relative ">
            <div className="sticky top-0 bg-black">
                <h1 className="text-xl font-bold underline underline-offset-2 pb-6">
                    {title}
                </h1>

            </div>
            <div className="h-full">{children}</div>
        </div>
    )
}