import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-rotulo text-sm tracking-wider transition-all disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default:
          "bg-sangre text-cielo-palido border-2 border-sangre-honda shadow-[4px_4px_0_0_var(--sangre-honda)] hover:bg-[color-mix(in_oklab,var(--sangre)_82%,var(--brasa))] hover:shadow-[2px_2px_0_0_var(--sangre-honda)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        brasa:
          "bg-brasa text-ceniza-honda border-2 border-[color-mix(in_oklab,var(--brasa)_60%,black)] shadow-[4px_4px_0_0_color-mix(in_oklab,var(--brasa)_45%,black)] hover:bg-brasa-viva hover:shadow-[2px_2px_0_0_color-mix(in_oklab,var(--brasa)_45%,black)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        outline:
          "border-2 border-border bg-transparent text-foreground hover:border-brasa hover:text-brasa hover:bg-brasa/5",
        secondary:
          "bg-muro text-cielo border-2 border-muro-alto hover:bg-muro-alto",
        ghost: "text-muted-foreground hover:text-brasa hover:bg-brasa/5",
        link: "text-brasa underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4",
        sm: "h-9 px-4 text-xs has-[>svg]:px-3",
        lg: "h-14 px-10 text-base has-[>svg]:px-8",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
