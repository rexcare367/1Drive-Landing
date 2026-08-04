import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  MapPin,
  Users,
  Calendar,
  DollarSign,
  Shield,
  Smartphone,
  BarChart3,
  Route,
  FileText,
  Bell,
  Zap,
} from "lucide-react";

export function FeaturesSection() {
  const driverFeatures = [
    {
      icon: Clock,
      title: "Smart Clock In/Out",
      description:
        "GPS-verified time tracking with automatic break detection and overtime calculations",
      color: "text-blue-500",
    },
    {
      icon: Calendar,
      title: "PTO Management",
      description:
        "Request time off, view remaining days, and get instant approval notifications",
      color: "text-green-500",
    },
    {
      icon: FileText,
      title: "Digital Timesheets",
      description:
        "Automated timesheet generation with detailed trip logs and mileage tracking",
      color: "text-purple-500",
    },
    {
      icon: DollarSign,
      title: "Payroll Integration",
      description:
        "Real-time payroll preview with deductions, bonuses, and payment history",
      color: "text-yellow-500",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Route updates, schedule changes, and important company announcements",
      color: "text-red-500",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Emergency contacts, safety protocols, and incident reporting tools",
      color: "text-indigo-500",
    },
  ];

  const managerFeatures = [
    {
      icon: MapPin,
      title: "Live GPS Tracking",
      description:
        "Real-time fleet visibility with route optimization and ETA predictions",
      color: "text-blue-500",
    },
    {
      icon: Route,
      title: "Trip Planning",
      description:
        "Create and assign trips with Google Maps integration and route optimization",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Driver Management",
      description:
        "Assign drivers to trips, manage schedules, and monitor performance metrics",
      color: "text-purple-500",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Comprehensive reports on efficiency, costs, and driver performance",
      color: "text-yellow-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Management",
      description:
        "Full management capabilities on mobile with offline sync support",
      color: "text-red-500",
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description:
        "Automated dispatch, recurring trip scheduling, and smart notifications",
      color: "text-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="scroll-mt-28 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="gradient-text block">Every User</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a driver on the road or a manager in the office,
            iDrive-TRK provides the tools you need to succeed
          </p>
        </motion.div>

        {/* Driver Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-accent/10 rounded-full px-6 py-3 border border-accent/20">
              <Smartphone className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">For Drivers</h3>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {driverFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="h-full card-gradient hover:scale-105 transition-all duration-300 border-border/20 group">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${
                          feature.color.split("-")[1]
                        }-500/20 to-${
                          feature.color.split("-")[1]
                        }-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${feature.color}`} />
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

        {/* Manager Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">For Managers</h3>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {managerFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <Card className="h-full card-gradient hover:scale-105 transition-all duration-300 border-border/20 group">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${
                          feature.color.split("-")[1]
                        }-500/20 to-${
                          feature.color.split("-")[1]
                        }-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${feature.color}`} />
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
      </div>
    </section>
  );
}
