import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const STORAGE_KEY = "idrive-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-5"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-2xl border border-border/30 bg-background/40 p-5 shadow-none backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:py-6">
            <div className="flex flex-1 items-start gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <p className="text-base font-semibold text-foreground">We use cookies</p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  We use cookies to improve your experience and analyze site traffic. See our{" "}
                  <Link
                    to="/privacy-policy"
                    className="font-medium text-primary underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3 self-stretch sm:self-center">
              <Button variant="outline" onClick={decline} className="rounded-full px-6">
                Decline
              </Button>
              <Button variant="default" onClick={accept} className="rounded-full px-6">
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
