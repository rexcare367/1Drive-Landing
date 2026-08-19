import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImageCarousel } from "@/components/image-carousel";
import { TechPills } from "@/components/tech-pills";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { APP_URL } from "@/lib/site-images";
import { StoreDownloadButtons } from "@/components/store-download-buttons";

export function ProductPage({
  product,
  other,
}: {
  product: Product;
  other: Product;
}) {
  const isAccent = product.tone === "accent";
  const iconWrap = isAccent ? "bg-accent/10" : "bg-primary/10";
  const iconColor = isAccent ? "text-accent" : "text-primary";
  const eyebrowClass = isAccent ? "text-accent" : "text-primary";

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 z-0">
          <ImageCarousel
            images={product.heroImages}
            fill
            showControls={false}
            intervalMs={5000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/55 to-background/25" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p
              className={cn(
                "mb-3 text-sm font-semibold uppercase tracking-wider",
                eyebrowClass,
              )}
            >
              {product.eyebrow}
            </p>
            <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {product.headline}
              <span className="gradient-text block">{product.headlineAccent}</span>
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {product.summary}
            </p>
            <p className="mb-8 text-sm font-medium text-foreground/80">
              {product.audience}
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              {product.primaryCta.external ? (
                <a
                  href={product.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "hero", size: "lg" }),
                    "rounded-full",
                  )}
                >
                  {product.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to={product.primaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "hero", size: "lg" }),
                    "rounded-full",
                  )}
                >
                  {product.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <Link
                to={other.path}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full",
                )}
              >
                See {other.eyebrow}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <h2 className="mb-2 text-3xl font-bold">Technical stack</h2>
            <p className="text-muted-foreground">
              What this product is actually built on — not a wishlist.
            </p>
          </div>
          <TechPills groups={product.tech} tone={product.tone} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-2 text-3xl font-bold">Features implemented</h2>
            <p className="text-muted-foreground">
              Shipping capabilities in {product.name} today.
            </p>
          </div>

          <div className="space-y-14">
            {product.featureGroups.map((group, gi) => (
              <div key={group.label}>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </h3>
                <div className="grid gap-5 md:grid-cols-2">
                  {group.features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (gi * 0.04) + i * 0.05 }}
                      >
                        <Card className="h-full border-border/40 card-gradient">
                          <CardHeader>
                            <div
                              className={cn(
                                "mb-2 flex h-11 w-11 items-center justify-center rounded-lg",
                                iconWrap,
                              )}
                            >
                              <Icon className={cn("h-5 w-5", iconColor)} />
                            </div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm leading-relaxed">
                              {feature.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {product.id === "mobile" && (
        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border/50 bg-muted/20 p-8 sm:p-10">
              <h2 className="mb-2 text-2xl font-bold">Get the driver app</h2>
              <p className="mb-6 max-w-xl text-muted-foreground">
                Available on iOS and Android. Clock in, run trips, and stay in
                sync with dispatch.
              </p>
              <StoreDownloadButtons />
            </div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 text-center sm:p-12">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              {product.id === "dashboard"
                ? "Ready to run the fleet from one console?"
                : "Ready to put the office in every cab?"}
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
              {product.id === "dashboard"
                ? "Open the web dashboard, or see what drivers get on mobile."
                : "Download the app, or see the manager dashboard that sits behind it."}
            </p>
            <ul className="mx-auto mb-8 flex max-w-lg flex-col gap-2 text-left sm:text-center">
              {product.highlights.slice(0, 3).map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {product.id === "dashboard" ? (
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "hero", size: "lg" }),
                    "rounded-full",
                  )}
                >
                  Launch Dashboard
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to="/#download"
                  className={cn(
                    buttonVariants({ variant: "hero", size: "lg" }),
                    "rounded-full",
                  )}
                >
                  Download the App
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <Link
                to="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full",
                )}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
