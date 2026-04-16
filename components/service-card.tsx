interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export function ServiceCard({ number, title, description, detail }: ServiceCardProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl bg-white p-6"
      style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f5f5f4] text-xs font-medium text-[#6b7280]">
        {number}
      </span>
      <h3 className="text-base font-medium text-[#1a1a1a]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#6b7280]">{description}</p>
      <span className="mt-auto text-xs text-[#6b7280]">{detail}</span>
    </div>
  );
}
