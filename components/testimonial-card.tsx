interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

export function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <div className="border-subtle flex flex-col gap-5 rounded-xl bg-white p-6 sm:p-8">
      {/* PLACEHOLDER — replace with real testimonial */}
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
        <path d="M0 18V10.8C0 4.44 3.48 1.08 10.44 0L11.16 2.16C7.8 3.12 5.88 5.28 5.4 8.64H10V18H0ZM13 18V10.8C13 4.44 16.48 1.08 23.44 0L24.16 2.16C20.8 3.12 18.88 5.28 18.4 8.64H23V18H13Z" fill="#B8860B" fillOpacity="0.2"/>
      </svg>
      <p className="text-base leading-relaxed text-[#1a1a1a]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        {quote}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[#1a1a1a]">{name}</span>
        <span className="text-sm text-[#6b7280]">&middot;</span>
        <span className="text-sm text-[#6b7280]">{company}</span>
      </div>
    </div>
  );
}
