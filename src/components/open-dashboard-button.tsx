import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
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
    <Link
      to="/dashboard"
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
    </Link>
  );
}
