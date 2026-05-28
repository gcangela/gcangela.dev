import "./custom-consultancy.css";
import { PropsWithChildren } from "react";

export default function CustomConsultancyLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="custom-consultancy min-h-screen w-full font-sans antialiased">
      {children}
    </div>
  );
}
