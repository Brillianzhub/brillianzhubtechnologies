import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">{children}</div>
    </section>
  );
}
