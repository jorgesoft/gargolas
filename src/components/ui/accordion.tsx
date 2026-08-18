import * as AccordionPrimitive from "@radix-ui/react-accordion"
import type * as React from "react"
import { ChevronDown } from "pixelarticons/react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b-2 border-border/70 last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "text-rotulo flex flex-1 items-start justify-between gap-4 py-5 text-left text-base text-cielo transition-colors outline-none",
          "hover:text-brasa focus-visible:ring-[3px] focus-visible:ring-brasa/40",
          "[&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-brasa",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="text-brasa pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-300" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "text-muted-foreground border-l-2 border-brasa/40 pt-0 pb-5 pl-4 leading-relaxed",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
