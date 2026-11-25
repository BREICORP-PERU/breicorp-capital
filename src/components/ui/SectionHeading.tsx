interface SectionHeadingProps {
  id?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-intro section-intro-inline ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
