import { useMobileAppLinks } from "@/hooks/use-mobile-app-links";
import { cn } from "@/lib/utils";

type StoreKey = "ios" | "android";

const STORES: Array<{
  key: StoreKey;
  label: string;
  src: string;
}> = [
  {
    key: "ios",
    label: "Download on the App Store",
    src: "/app-store.png",
  },
  {
    key: "android",
    label: "Get it on Google Play",
    src: "/google-store.png",
  },
];

function StoreLink({
  href,
  loading,
  label,
  src,
}: {
  href: string | null;
  loading: boolean;
  label: string;
  src: string;
}) {
  const image = (
    <img
      src={src}
      alt={label}
      className="h-12 w-auto sm:h-14"
    />
  );

  const className = cn(
    "inline-flex shrink-0 transition hover:opacity-90 hover:scale-[1.03]",
    (loading || !href) && "pointer-events-none opacity-50",
  );

  if (loading || !href) {
    return (
      <span
        className={className}
        aria-busy={loading || undefined}
        aria-disabled={!loading || undefined}
        title={!loading && !href ? `${label} is not configured yet` : undefined}
      >
        {image}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {image}
    </a>
  );
}

export function StoreDownloadButtons() {
  const { data, isPending } = useMobileAppLinks();
  const links = data ?? { ios: null, android: null };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
      {STORES.map((store) => (
        <StoreLink
          key={store.key}
          href={links[store.key]}
          loading={isPending}
          label={store.label}
          src={store.src}
        />
      ))}
    </div>
  );
}
