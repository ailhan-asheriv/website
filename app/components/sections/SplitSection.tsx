import { ReactNode } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export interface SplitSectionProps {
  id: string;
  variant?: "dark" | "light" | "darker";
  title: string;
  /** Optional lead paragraph(s) below title */
  lead?: ReactNode;
  /** Main body content (paragraphs, list, etc.) */
  children: ReactNode;
  /** Optional callout box rendered below main content */
  callout?: { title: string; text: string };
  /** Title alignment */
  align?: "left" | "center";
}

export default function SplitSection({
  id,
  variant = "dark",
  title,
  lead,
  children,
  callout,
  align = "center",
}: SplitSectionProps) {
  return (
    <Section id={id} variant={variant}>
      <SectionHeader title={title} accent align={align} lead={lead} />
      <div className={callout ? "max-w-3xl mx-auto space-y-6 text-center mb-10" : ""}>
        {children}
      </div>
      {callout && (
        <div className="max-w-2xl mx-auto callout-box mt-10">
          <p className="font-semibold text-offwhite mb-1">{callout.title}</p>
          <p className="text-muted text-sm leading-relaxed">{callout.text}</p>
        </div>
      )}
    </Section>
  );
}
