import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwind.config.cssinline-flex tailwind.config.cssitems-center tailwind.config.cssjustify-center tailwind.config.csswhitespace-nowrap tailwind.config.cssrounded-md tailwind.config.csstext-sm tailwind.config.cssfont-medium tailwind.config.cssring-offset-background tailwind.config.csstransition-colors focus-visible:tailwind.config.cssoutline-none focus-visible:tailwind.config.cssring-2 focus-visible:tailwind.config.cssring-ring focus-visible:tailwind.config.cssring-offset-2 disabled:tailwind.config.csspointer-events-none disabled:tailwind.config.cssopacity-50",
  {
    variants: {
      variant: {
        default: "tailwind.config.cssbg-primary tailwind.config.csstext-primary-foreground hover:tailwind.config.cssbg-primary/90",
        destructive:
          "tailwind.config.cssbg-destructive tailwind.config.csstext-destructive-foreground hover:tailwind.config.cssbg-destructive/90",
        outline:
          "tailwind.config.cssborder tailwind.config.cssborder-input tailwind.config.cssbg-background hover:tailwind.config.cssbg-accent hover:tailwind.config.csstext-accent-foreground",
        secondary:
          "tailwind.config.cssbg-secondary tailwind.config.csstext-secondary-foreground hover:tailwind.config.cssbg-secondary/80",
        ghost: "hover:tailwind.config.cssbg-accent hover:tailwind.config.csstext-accent-foreground",
        link: "tailwind.config.csstext-primary tailwind.config.cssunderline-offset-4 hover:tailwind.config.cssunderline",
      },
      size: {
        default: "tailwind.config.cssh-10 tailwind.config.csspx-4 tailwind.config.csspy-2",
        sm: "tailwind.config.cssh-9 tailwind.config.cssrounded-md tailwind.config.csspx-3",
        lg: "tailwind.config.cssh-11 tailwind.config.cssrounded-md tailwind.config.csspx-8",
        icon: "tailwind.config.cssh-10 tailwind.config.cssw-10",
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
