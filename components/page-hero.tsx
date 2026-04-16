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
          <p className="mb-4 inline-block rounded-full border border-[#B8860B]/20 bg-[#B8860B]/5 px-3 py-1 text-xs font-medium text-[#B8860B]">
            {badge}
          </p>
        )}
        <h1 className="text-3xl font-medium text-[#1a1a1a] sm:text-4xl lg:text-[44px]" style={{ lineHeight: 1.2 }}>
          {heading}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6b7280]">
          {description}
        </p>
      </div>
    </section>
  );
}
