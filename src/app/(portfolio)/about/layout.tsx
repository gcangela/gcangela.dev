
import { ImageOfMe } from "@/components/ImageOfMe";
import { PropsWithChildren } from "react";

export default function AboutPageLayout({ children }: PropsWithChildren) {

    return <div className="flex flex-col md:flex-row relative top-0 h-full gap-8">
        <div className="items-center justify-center flex-wrap hidden shrink-0 md:flex">
            <ImageOfMe />
        </div>
        <div className="sticky-0 bg-custom-mobile-image h-40 w-40 rounded-full bg-cover md:hidden bg-top mx-auto my-6 shrink-0" />
        <div className="flex flex-col items-center justify-center h-full">
            {children}
        </div>
    </div>
}
