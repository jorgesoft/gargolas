import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 border-2 border-border bg-input/70 px-4 py-2 text-base text-foreground shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.45)] transition-colors outline-none",
        "placeholder:text-muted-foreground/70 selection:bg-brasa selection:text-ceniza-honda",
        "focus-visible:border-brasa focus-visible:ring-[3px] focus-visible:ring-brasa/30",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/30",
        "disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
