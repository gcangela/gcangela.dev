import { PropsWithChildren } from "react";

export default function AboutPageLayout({ children }: PropsWithChildren) {
    return <div className="flex flex-col">
        <div className="sticky-0 bg-custom-mobile-image h-40 w-40 rounded-full bg-cover md:hidden bg-top mx-auto my-6 shrink-0" />
        <div className="flex flex-col items-center justify-center h-full">
            {children}
        </div>
    </div>
}
