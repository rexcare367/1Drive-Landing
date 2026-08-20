import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { StoreDownloadButtons } from "@/components/store-download-buttons";

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

            <StoreDownloadButtons />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
            <img
              src="/driver-app-download.png"
              alt="1Drive driver app on a smartphone, with a highway truck in the background"
              className="relative w-full max-w-md rounded-3xl border border-border/40 shadow-elegant object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
