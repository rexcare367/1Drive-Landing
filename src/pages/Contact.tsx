import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import teamWorkflowImage from "@/assets/team-workflow.jpg";
import { useContactInfo } from "@/hooks/use-contact-info";
import { formatAddressMultiline } from "@/lib/contact";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Building,
  Users,
  HeadphonesIcon,
} from "lucide-react";

export default function Contact() {
  const contact = useContactInfo();

  const contactMethods = contact
    ? [
        {
          icon: Mail,
          title: "Email Support",
          description: "Get help via email",
          contact: contact.email,
          href: `mailto:${contact.email}`,
          color: "text-blue-500",
        },
        {
          icon: Phone,
          title: "Phone Support",
          description: "Call us for immediate assistance",
          contact: contact.phone,
          href: `tel:${contact.phone.replace(/\s/g, "")}`,
          color: "text-green-500",
        },
        {
          icon: Building,
          title: "Business Inquiries",
          description: "Enterprise and partnership",
          contact: contact.email,
          href: `mailto:${contact.email}`,
          color: "text-purple-500",
        },
        {
          icon: HeadphonesIcon,
          title: "24/7 Emergency",
          description: "Round-the-clock support",
          contact: contact.phone,
          href: `tel:${contact.phone.replace(/\s/g, "")}`,
          color: "text-red-500",
        },
      ]
    : [];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Emergency Support Only" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={teamWorkflowImage}
            alt="Team collaboration workflow"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
          <div className="absolute inset-0 hero-pattern" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about iDrive-TRK? Need help getting started? Our
              team is here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full card-gradient hover:scale-105 transition-all duration-300 border-border/20 group text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className={`w-8 h-8 ${method.color}`} />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={method.href}
                        className={`font-semibold ${method.color} hover:underline`}
                      >
                        {method.contact}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="card-gradient border-border/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contact && (
                <Card className="card-gradient border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Our Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {formatAddressMultiline(contact).map((line, i) => (
                        <span key={line}>
                          {line}
                          {i < formatAddressMultiline(contact).length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </p>
                  </CardContent>
                </Card>
              )}

              <Card className="card-gradient border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {schedule.day}
                      </span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-gradient border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>Our Team</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium text-green-500">
                      &lt; 2 hours
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Support Rating
                    </span>
                    <span className="font-medium text-yellow-500">
                      4.9/5 ⭐
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="font-medium">EN, ES, FR</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
