import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SiteImage } from "@/lib/site-images";

type ImageCarouselProps = {
  images: readonly SiteImage[];
  className?: string;
  imageClassName?: string;
  intervalMs?: number;
  showControls?: boolean;
  aspectClassName?: string;
  overlay?: boolean;
  /** Stretch to fill a positioned parent (e.g. section background) */
  fill?: boolean;
};

export function ImageCarousel({
  images,
  className,
  imageClassName,
  intervalMs = 4500,
  showControls = true,
  aspectClassName = "aspect-[4/3]",
  overlay = false,
  fill = false,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(goNext, intervalMs);
    return () => clearInterval(id);
  }, [paused, count, intervalMs, goNext]);

  if (!count) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fill
          ? "absolute inset-0 h-full w-full rounded-none"
          : cn("rounded-2xl", aspectClassName),
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index].src + index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            imageClassName,
          )}
        />
      </AnimatePresence>

      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      )}

      {showControls && count > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/40 bg-background/75 text-foreground backdrop-blur-sm transition hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <div className="flex items-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  i === index
                    ? "w-4 bg-accent"
                    : "w-1 bg-foreground/35 hover:bg-foreground/55",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border/40 bg-background/75 text-foreground backdrop-blur-sm transition hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
