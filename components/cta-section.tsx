import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTASection({ heading, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-2xl font-medium text-white sm:text-3xl">
          {heading}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9ca3af]">
            {description}
          </p>
        )}
        <Link
          href={buttonHref}
          className="mt-8 inline-block rounded-lg bg-[#B8860B] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#A07608]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
