interface PageHeroProps {
  badge?: string;
  heading: string;
  description: string;
}

export function PageHero({ badge, heading, description }: PageHeroProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-[#f5f5f4] px-3 py-1 text-xs font-medium text-[#6b7280]">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-medium text-[#1a1a1a] sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.2 }}>
          {heading}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6b7280]">
          {description}
        </p>
      </div>
    </section>
  );
}
