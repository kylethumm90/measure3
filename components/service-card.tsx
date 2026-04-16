interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export function ServiceCard({ number, title, description, detail }: ServiceCardProps) {
  return (
    <div className="border-subtle flex flex-col gap-4 rounded-xl bg-white p-6 transition-colors hover:bg-[#fafaf9]">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F9F5EC] text-xs font-medium text-[#B8860B]">
        {number}
      </span>
      <h3 className="text-base font-medium text-[#1a1a1a]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#6b7280]">{description}</p>
      <span className="mt-auto text-xs font-medium text-[#B8860B]">{detail}</span>
    </div>
  );
}
