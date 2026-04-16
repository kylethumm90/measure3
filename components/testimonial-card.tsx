interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

export function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl bg-white p-6"
      style={{ border: "0.5px solid rgba(0,0,0,0.1)" }}
    >
      {/* PLACEHOLDER — replace with real testimonial */}
      <p className="text-base leading-relaxed text-[#1a1a1a]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <span className="text-sm font-medium text-[#1a1a1a]">{name}</span>
        <span className="text-sm text-[#6b7280]"> &middot; {company}</span>
      </div>
    </div>
  );
}
