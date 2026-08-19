import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useContactInfo } from "@/hooks/use-contact-info";
import { formatAddress } from "@/lib/contact";

export function Footer() {
  const contact = useContactInfo();

  const footerLinks = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Dashboard", href: "/dashboard" },
      { name: "Mobile App", href: "/mobile" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [{ name: "Privacy Policy", href: "/privacy-policy" }],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-background border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="iDrive-TRK" className="h-10 w-auto" />
              <h1 className="text-3xl font-bold text-primary">1Drive</h1>
              <h1 className="text-3xl font-bold text-[#afcc5f]">TMS</h1>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              The complete driver management solution for modern fleets.
              Streamline operations, enhance safety, and improve efficiency.
            </p>

            {contact && (
              <div className="space-y-2 mb-6">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contact.email}</span>
                </a>
                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{formatAddress(contact)}</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 iDrive-TRK. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
