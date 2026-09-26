import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400",
  {
    variants: {
      variant: {
        default:
          "border border-slate-200/80 bg-white/80 text-slate-800 backdrop-blur-sm shadow-sm",
        secondary:
          "border-transparent bg-slate-100 text-slate-900",
        destructive:
          "border-transparent bg-red-100 text-red-700",
        outline:
          "border-slate-300 text-slate-700",
        redBadge:
          "border border-red-200/60 bg-red-50/90 text-red-700 font-semibold shadow-xs",
        glass:
          "border border-white/60 bg-white/60 backdrop-blur-md text-slate-800 shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
