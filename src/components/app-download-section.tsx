import { motion } from "framer-motion";
import { Smartphone, Apple, Play } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/";
const PLAY_STORE_URL = "https://play.google.com/store";

export function AppDownloadSection() {
  return (
    <section
      id="download"
      className="scroll-mt-28 relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <Smartphone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Mobile App</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Download the
              <span className="gradient-text block">1Drive Driver App</span>
            </h2>
            <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
              Clock in, request PTO, track trips, and stay in sync with dispatch —
              wherever the road takes you. Available on iOS and Android.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3.5 text-background transition hover:opacity-90"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide opacity-80">
                    Download on the
                  </p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5 transition hover:bg-muted/50"
              >
                <Play className="h-7 w-7 fill-accent text-accent" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                    Get it on
                  </p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative w-[240px] rounded-[2.2rem] border-[7px] border-foreground/85 bg-card p-2 shadow-elegant">
              <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-primary to-primary/80 p-5 text-primary-foreground min-h-[420px]">
                <div className="mb-6 flex items-center justify-between">
                  <img src="/logo.png" alt="" className="h-8 w-auto brightness-0 invert" />
                  <span className="text-xs font-medium opacity-80">Driver</span>
                </div>
                <h3 className="mb-1 text-xl font-bold">Ready to roll?</h3>
                <p className="mb-6 text-sm opacity-85">
                  Your next shift is one tap away.
                </p>
                <div className="space-y-3">
                  {["Clock In", "View Schedule", "Request PTO"].map((label) => (
                    <div
                      key={label}
                      className="rounded-xl bg-background/15 px-4 py-3 text-sm font-medium backdrop-blur-sm"
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground">
                  Start Shift
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
