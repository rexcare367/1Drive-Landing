import { LayoutDashboard } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { APP_URL } from "@/lib/site-images";
import { cn } from "@/lib/utils";

type OpenDashboardButtonProps = {
  className?: string;
  size?: "sm" | "default" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
};

export function OpenDashboardButton({
  className,
  size = "sm",
  fullWidth = false,
  onClick,
}: OpenDashboardButtonProps) {
  return (
    <a
      href={APP_URL}
      className={cn(
        buttonVariants({ variant: "dashboard", size }),
        "rounded-full",
        fullWidth && "w-full",
        className,
      )}
      onClick={onClick}
    >
      Open Dashboard
      <LayoutDashboard />
    </a>
  );
}
