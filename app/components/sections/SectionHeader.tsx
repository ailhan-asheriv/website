import { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  /** When true, title uses gradient accent styling */
  accent?: boolean;
  /** Default: "center" */
  align?: "left" | "center";
  /** Optional lead/paragraph below title */
  lead?: ReactNode;
  /** Optional className for the wrapper */
  className?: string;
}

export default function SectionHeader({
  title,
  accent = true,
  align = "center",
  lead,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const titleClass = accent ? "section-heading-accent" : "text-offwhite";

  return (
    <header className={`${alignClass} ${className}`.trim()}>
      <h2 className="section-heading">
        <span className={titleClass}>{title}</span>
      </h2>
      {lead && (
        <div className={`section-lead mt-0 ${align === "center" ? "section-lead-center" : "max-w-3xl"}`}>
          {typeof lead === "string" ? <p>{lead}</p> : lead}
        </div>
      )}
    </header>
  );
}
