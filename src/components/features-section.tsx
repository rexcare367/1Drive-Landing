import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { dashboardProduct, mobileProduct, type Product } from "@/lib/products";
import { TechPillsFlat } from "@/components/tech-pills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function ProductBlock({
  product,
  icon: Icon,
}: {
  product: Product;
  icon: typeof LayoutDashboard;
}) {
  const isAccent = product.tone === "accent";
  const badgeClass = isAccent
    ? "bg-accent/10 border-accent/20 text-accent"
    : "bg-primary/10 border-primary/20 text-primary";
  const iconWrap = isAccent ? "bg-accent/10" : "bg-primary/10";
  const iconColor = isAccent ? "text-accent" : "text-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-20 last:mb-0"
    >
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div
            className={cn(
              "mb-5 inline-flex items-center gap-2 rounded-full border px-5 py-2.5",
              badgeClass,
            )}
          >
            <Icon className="h-5 w-5" />
            <h3 className="text-lg font-bold">{product.eyebrow}</h3>
          </div>
          <h3 className="mb-3 text-3xl font-bold lg:text-4xl">
            {product.headline}
            <span className="gradient-text block">{product.headlineAccent}</span>
          </h3>
          <p className="mb-5 text-lg text-muted-foreground">{product.summary}</p>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Technical stack
          </p>
          <TechPillsFlat groups={product.tech} tone={product.tone} />
        </div>

        <Link
          to={product.path}
          className={cn(
            buttonVariants({ variant: "hero", size: "lg" }),
            "shrink-0 rounded-full",
          )}
        >
          Explore {product.eyebrow}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {product.highlights.map((feature) => {
          const FeatureIcon = feature.icon;
          return (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group h-full border-border/20 card-gradient transition-all duration-300 hover:scale-[1.03]">
                <CardHeader>
                  <div
                    className={cn(
                      "mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110",
                      iconWrap,
                    )}
                  >
                    <FeatureIcon className={cn("h-6 w-6", iconColor)} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative scroll-mt-28 overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Two products,
            <span className="gradient-text block">one fleet platform</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            A web dashboard for managers and a native app for drivers — each
            with its own stack, built around the work that actually happens.
          </p>
        </motion.div>

        <ProductBlock product={dashboardProduct} icon={LayoutDashboard} />
        <ProductBlock product={mobileProduct} icon={Smartphone} />
      </div>
    </section>
  );
}
