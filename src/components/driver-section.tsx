import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Calendar,
  FileText,
  DollarSign,
  Smartphone,
} from "lucide-react";

export function DriverSection() {
  const driverFeatures = [
    {
      icon: Clock,
      title: "Clock In/Out",
      description: "GPS-verified time tracking with automatic break detection",
      highlight: "Real-time tracking",
    },
    {
      icon: Calendar,
      title: "PTO Requests",
      description: "Easy time-off requests with instant approval notifications",
      highlight: "Instant approval",
    },
    {
      icon: FileText,
      title: "Digital Timesheets",
      description: "Automated timesheet generation with detailed trip logs",
      highlight: "Auto-generated",
    },
    {
      icon: DollarSign,
      title: "Payroll Preview",
      description: "Real-time payroll preview with deductions and bonuses",
      highlight: "Live updates",
    },
  ];

  return (
    <section id="drivers" className="scroll-mt-28 py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Smartphone className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">
                For Drivers
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything Drivers
              <span className="gradient-text block">Need to Succeed</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Our mobile app puts powerful tools in drivers' hands. Clock in/out
              with GPS verification, request PTO, track hours, and stay
              connected with your team.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">2min</div>
                <div className="text-sm text-muted-foreground">Setup</div>
              </div>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {driverFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full card-gradient hover:scale-105 transition-all duration-300 border-border/20 group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {feature.highlight}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
