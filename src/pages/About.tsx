import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/components/image-carousel";
import { APP_URL, siteImages } from "@/lib/site-images";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Truck,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-driven",
    description:
      "We build tools that help fleets run safer, faster, and with less paperwork — so drivers and managers can focus on the road.",
  },
  {
    icon: Eye,
    title: "Clarity first",
    description:
      "Live GPS, clear schedules, and transparent timesheets. Every decision starts with accurate, real-time data.",
  },
  {
    icon: Heart,
    title: "Driver-first design",
    description:
      "Mobile experiences that work in the cab — simple clock-in, PTO, and trip updates without the clutter.",
  },
  {
    icon: Shield,
    title: "Trust & security",
    description:
      "Enterprise-grade practices around location data, employment records, and access control you can rely on.",
  },
];

const stats = [
  { icon: Users, value: "10K+", label: "Active Drivers" },
  { icon: Truck, value: "500+", label: "Fleet Managers" },
  { icon: MapPin, value: "50+", label: "Cities Covered" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <ImageCarousel
            images={siteImages.about}
            fill
            showControls={false}
            intervalMs={5000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/45 to-background/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              About Us
            </p>
            <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Built for modern
              <span className="gradient-text block">fleet operations</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              1Drive TMS is a complete driver management platform — uniting
              mobile tools for drivers with a powerful web console for managers,
              dispatch, and payroll-ready timesheets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-border/40 bg-muted/20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-3 text-3xl font-bold">What we stand for</h2>
            <p className="text-muted-foreground">
              Logistics is hard enough. Our product philosophy is simple: remove
              friction for drivers, give managers clarity, and keep data trustworthy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="h-full card-gradient border-border/40">
                    <CardHeader>
                      <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 sm:p-12 text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Ready to streamline your fleet?
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
              Talk with our team or jump straight into the platform.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className={cn(buttonVariants({ variant: "hero", size: "lg" }), "rounded-full")}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full",
                )}
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
