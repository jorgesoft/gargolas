import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { enigmas } from "@/data/sitio"

export function Enigmas() {
  return (
    <section id="enigmas" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-brasa mb-3 text-[0.65rem] tracking-[0.4em] uppercase">
          Preguntas que ya nos han hecho
        </p>
        <h2 className="text-rotulo text-cielo text-4xl sm:text-5xl">
          Lo que se puede preguntar
        </h2>
      </div>

      <div className="marco-piedra px-6">
        <Accordion type="single" collapsible>
          {enigmas.map(({ pregunta, respuesta }) => (
            <AccordionItem key={pregunta} value={pregunta}>
              <AccordionTrigger>{pregunta}</AccordionTrigger>
              <AccordionContent>{respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
