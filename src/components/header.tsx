import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { OpenDashboardButton } from "@/components/open-dashboard-button";

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const id = href.replace("#", "");
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection(id);
      window.history.replaceState(null, "", href);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Mobile", href: "/mobile" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pointer-events-none",
        isScrolled ? "mt-3" : "mt-4",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto max-w-7xl",
          "glass-header rounded-full px-4 py-2 sm:px-5 transition-all duration-300",
        )}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-5">
          <Link to="/" className="flex items-center gap-2 min-w-0 shrink-0">
            <img
              src="/logo.png"
              alt="1Drive TMS"
              className="h-8 w-auto shrink-0"
            />
            <span className="text-lg font-bold tracking-tight text-primary">
              1Drive
            </span>
            <span className="text-lg font-bold tracking-tight brand-mark">
              TMS
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navigationItems.map((item) => {
              const className =
                "px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors whitespace-nowrap";
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.name}
                    href={`/${item.href}`}
                    onClick={(e) => handleSectionClick(e, item.href)}
                    className={className}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    className,
                    pathname === item.href && "text-foreground bg-muted/50",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <OpenDashboardButton
              className="hidden sm:inline-flex px-5"
              size="sm"
            />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-3 pt-3 border-t border-border/30 overflow-hidden min-w-[260px]"
            >
              <nav className="flex flex-col gap-1 pb-1">
                {navigationItems.map((item) => {
                  const className =
                    "px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/50 transition-colors";
                  const closeMenu = () => setIsMobileMenuOpen(false);
                  if (item.href.startsWith("#")) {
                    return (
                      <a
                        key={item.name}
                        href={`/${item.href}`}
                        className={className}
                        onClick={(e) => {
                          handleSectionClick(e, item.href);
                          closeMenu();
                        }}
                      >
                        {item.name}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={className}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <OpenDashboardButton
                  className="mt-2"
                  fullWidth
                  size="default"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
