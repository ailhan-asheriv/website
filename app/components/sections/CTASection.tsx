import { Link } from "../../../lib/routing";

export interface CTASectionProps {
  id: string;
  headline: string;
  paragraph: string;
  steps?: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  /** Optional content below CTAs (e.g. contact form block) */
  children?: React.ReactNode;
}

export default function CTASection({
  id,
  headline,
  paragraph,
  steps,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref,
  ctaSecondaryHref,
  children,
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="section-padding bg-navy border-t border-navy-light"
    >
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">
            <span className="section-heading-accent">{headline}</span>
          </h2>
          <p className="section-lead section-lead-center mb-10">{paragraph}</p>
          {steps && steps.length > 0 && (
            <ul className="text-left max-w-xl mx-auto space-y-2 mb-10">
              {steps.map((step, i) => (
                <li key={i} className="list-bullet">
                  <span className="list-bullet-marker">—</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaPrimaryHref} className="btn-primary">
              {ctaPrimary}
            </Link>
            <Link href={ctaSecondaryHref} className="btn-secondary">
              {ctaSecondary}
            </Link>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
