import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Route, AlertCircle, Zap, Shield } from "lucide-react";

export function TrackingSection() {
  const trackingFeatures = [
    { label: "Real-time GPS", value: "24/7", icon: MapPin },
    { label: "Location Updates", value: "Every 30s", icon: Clock },
    { label: "Route Optimization", value: "AI-Powered", icon: Route },
    { label: "Safety Alerts", value: "Instant", icon: AlertCircle },
    { label: "Battery Optimization", value: "Smart", icon: Zap },
    { label: "Data Security", value: "Encrypted", icon: Shield },
  ];

  return (
    <section id="tracking" className="scroll-mt-28 py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              GPS Tracking
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Advanced GPS Tracking &
            <span className="gradient-text block">Route Optimization</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep your fleet connected with enterprise-grade GPS tracking.
            Monitor driver locations, optimize routes, and ensure safety with
            real-time updates.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Map Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="card-gradient border-border/20 p-8">
              {/* Map Background */}
              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
                <img
                  src="/gps.png"
                  alt="GPS tracking map with route, distance, and speed metrics"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Live Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Live Tracking Active
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Last updated: 30s ago
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {trackingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-4 card-gradient border-border/20 hover:scale-105 transition-all duration-300 group">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {feature.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {feature.value}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-semibold">
                Why Choose Our Tracking?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">
                    Military-grade GPS accuracy within 3 meters
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">
                    Automatic route optimization saves 20% on fuel
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">
                    Instant safety alerts and emergency response
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
