import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-card border border-black/5 dark:border-white/10 text-card-foreground transition-all shadow-sm hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] overflow-hidden relative",
      className
    )}
    {...props}
  >
    {props.children}
  </div>
))
Card.displayName = "Card"

export { Card }
