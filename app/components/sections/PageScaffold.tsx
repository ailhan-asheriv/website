import { ReactNode } from "react";

export interface PageScaffoldProps {
  /** Page title (hero) */
  title: string;
  /** Short intro below title; optional */
  intro?: string | ReactNode;
  /** Main content between hero and CTA */
  children?: ReactNode;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA href; default /#contact */
  ctaHref?: string;
  /** Back link label */
  backLabel?: string;
  /** Back link href; default "/" */
  backHref?: string;
  /** Locale for Link */
  locale?: string;
  /** Optional extra content in hero (e.g. CTA in hero) */
  heroExtra?: ReactNode;
}

export default function PageScaffold({
  title,
  intro,
  children,
  ctaLabel = "Contact us",
  ctaHref = "/#contact",
  backLabel = "",
  backHref = "/",
  locale,
  heroExtra,
}: PageScaffoldProps) {
  void ctaLabel;
  void ctaHref;
  void backLabel;
  void backHref;
  void locale;
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 bg-[#0A0F1E] border-b border-white/10">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">{title}</h1>
            {intro != null && (
              <div className="text-lg text-[#00D4FF] leading-relaxed max-w-2xl">
                {typeof intro === "string" ? <p>{intro}</p> : intro}
              </div>
            )}
            {heroExtra}
          </div>
        </div>
      </section>

      {children}
    </>
  );
}
