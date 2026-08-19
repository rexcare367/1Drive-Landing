import { cn } from "@/lib/utils";
import type { TechGroup } from "@/lib/products";

export function TechPills({
  groups,
  tone = "primary",
  className,
}: {
  groups: TechGroup[];
  tone?: "primary" | "accent";
  className?: string;
}) {
  const chip =
    tone === "accent"
      ? "border-accent/25 bg-accent/10 text-accent"
      : "border-primary/25 bg-primary/10 text-primary";

  return (
    <div className={cn("space-y-4", className)}>
      {groups.map((group) => (
        <div key={group.label}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item.name}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  chip,
                )}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TechPillsFlat({
  groups,
  tone = "primary",
  className,
}: {
  groups: TechGroup[];
  tone?: "primary" | "accent";
  className?: string;
}) {
  const chip =
    tone === "accent"
      ? "border-accent/25 bg-accent/10 text-foreground"
      : "border-primary/25 bg-primary/10 text-foreground";

  const names = groups.flatMap((g) => g.items.map((i) => i.name));

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {names.map((name) => (
        <span
          key={name}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium",
            chip,
          )}
        >
          {name}
        </span>
      ))}
    </div>
  );
}
