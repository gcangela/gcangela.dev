import Image from "next/image";

export function Logo({
  brandName,
  className = "h-8 w-8",
}: {
  brandName: string;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/placeholder.svg"
        alt="Placeholder logo"
        width={32}
        height={32}
        className={className}
      />
      <span className="font-semibold text-xl text-slate-900">{brandName}</span>
    </div>
  );
}

export function FooterLogo({ brandName }: { brandName: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/placeholder.svg"
        alt="Placeholder logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="font-semibold text-xl text-white">{brandName}</span>
    </div>
  );
}
