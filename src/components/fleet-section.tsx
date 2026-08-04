import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, Users, BarChart3, Truck, Globe } from "lucide-react";

export function FleetSection() {
  const fleetFeatures = [
    {
      icon: MapPin,
      title: "Live GPS Tracking",
      description: "Real-time fleet visibility with route optimization",
      metric: "99.9% uptime",
    },
    {
      icon: Route,
      title: "Trip Planning",
      description: "Create and assign trips with Google Maps integration",
      metric: "30% faster routes",
    },
    {
      icon: Users,
      title: "Driver Management",
      description: "Assign drivers, manage schedules, monitor performance",
      metric: "50+ drivers",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reports on efficiency and costs",
      metric: "Real-time insights",
    },
  ];

  return (
    <section id="fleet" className="scroll-mt-28 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {fleetFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full card-gradient hover:scale-105 transition-all duration-300 border-border/20 group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {feature.metric}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Truck className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                For Fleet Managers
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Fleet
              <span className="gradient-text block">Management Suite</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Powerful web-based tools for fleet managers. Plan trips with
              Google Maps, track drivers in real-time, and optimize operations
              with advanced analytics.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Google Maps Integration
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Plan optimal routes with real-time traffic data and GPS
                    tracking
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-3 h-3 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Advanced Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive reports on driver performance, costs, and
                    efficiency
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-3 h-3 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Team Coordination</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamless communication and task assignment across your team
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
