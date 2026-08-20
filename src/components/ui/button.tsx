import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hero-gradient text-primary-foreground hover:scale-105 hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "hero-gradient text-primary-foreground hover:scale-105 glow-effect hover:shadow-xl border-0 font-semibold",
        cta: "bg-primary text-primary-foreground font-semibold border border-white/10 shadow-[0_8px_22px_-12px_hsl(var(--primary)/0.7)] hover:bg-[hsl(221,83%,47%)] hover:shadow-[0_10px_26px_-12px_hsl(var(--primary)/0.8)] hover:border-white/20",
        dashboard:
          "rounded-full bg-primary text-primary-foreground font-semibold tracking-wide border border-white/10 shadow-[0_1px_0_0_hsl(0_0%_100%/0.14)_inset,0_8px_18px_-10px_hsl(var(--primary)/0.65)] hover:bg-[hsl(221,83%,47%)] hover:shadow-[0_1px_0_0_hsl(0_0%_100%/0.18)_inset,0_10px_22px_-10px_hsl(var(--primary)/0.75)] active:bg-[hsl(221,83%,44%)]",
        glass: "glass-header text-foreground hover:bg-background/90 border border-border/50",
        download: "bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-glow font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-full px-8 py-3",
        icon: "h-10 w-10",
        hero: "h-14 rounded-full px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
