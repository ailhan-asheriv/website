import { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  /** Background variant for consistent alternating sections */
  variant?: "dark" | "light" | "darker";
  children: ReactNode;
  className?: string;
}

const bgMap = {
  dark: "bg-[#0A0F1E]",
  light: "bg-[#0D1627]",
  darker: "bg-[#070C18]",
};

export default function Section({
  id,
  variant = "dark",
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:px-10 lg:px-16 lg:py-24 ${bgMap[variant]} ${className}`.trim()}
    >
      <div className="container-width">{children}</div>
    </section>
  );
}
