import { motion } from "framer-motion";
import { CheckCircle, Truck, Clock, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-highway.jpg";
import { buttonVariants } from "@/components/ui/button";
import { StoreDownloadButtons } from "@/components/store-download-buttons";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const features = [
    "Real-time GPS tracking",
    "Automated timesheet management",
    "PTO request system",
    "Trip scheduling & assignment",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Highway with container truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/70 to-background/30" />
        <div className="absolute inset-0 hero-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <Truck className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Complete Driver Management Solution
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight"
              >
                Streamline Your
                <span className="gradient-text block">Fleet Operations</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Empower your USPS drivers with mobile clock-in/out, PTO
                management, and timesheet tracking. Give managers powerful tools
                for trip planning, GPS tracking, and team coordination.
              </motion.p>
            </div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col gap-4"
            >
              <a
                href="/#features"
                className={cn(
                  buttonVariants({ variant: "cta", size: "hero" }),
                  "w-fit",
                )}
              >
                Get Started
                <span aria-hidden>→</span>
              </a>
              <StoreDownloadButtons />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20"
            >
              {[
                { icon: Users, value: "10K+", label: "Active Drivers" },
                { icon: Truck, value: "500+", label: "Fleet Managers" },
                { icon: Clock, value: "99.9%", label: "Uptime" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Floating Cards */}
            <div className="relative w-full h-96">
              {/* Driver App Card */}
              <motion.div
                className="absolute top-0 right-0 w-72 card-gradient rounded-2xl p-6 border border-border/20"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Driver Mobile App</h3>
                    <p className="text-sm text-muted-foreground">
                      Clock in/out & PTO
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Today's Hours</span>
                    <span className="font-semibold text-accent">8.5h</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </motion.div>

              {/* Manager Dashboard Card */}
              <motion.div
                className="absolute bottom-0 left-0 w-80 card-gradient rounded-2xl p-6 border border-border/20"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Manager Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Live fleet tracking
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-xs text-muted-foreground">
                      Active Drivers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="text-xs text-muted-foreground">
                      En Route
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
