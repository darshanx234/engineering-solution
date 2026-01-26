interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "mx-auto max-w-2xl text-center" : ""
      }`}
    >
      {label && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
      )}
      <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
