import { Fire, Login, Moon, Volume3 } from "pixelarticons/react"
import type { JSX } from "react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { senales, type Senal } from "@/data/sitio"

const ICONOS: Record<Senal["icono"], (p: { className?: string }) => JSX.Element> = {
  puerta: Login,
  fuego: Fire,
  sonido: Volume3,
  regla: Moon,
}

export function Senales() {
  return (
    <section id="senales" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mb-14 text-center">
        <p className="text-brasa mb-3 text-[0.65rem] tracking-[0.4em] uppercase">
          Cuatro cosas que ya se saben
        </p>
        <h2 className="text-rotulo text-cielo text-4xl sm:text-5xl">Las señales</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {senales.map((senal) => {
          const Icono = ICONOS[senal.icono]
          return (
            <Card
              key={senal.titulo}
              className="group hover:border-brasa/60 gap-5 transition-colors"
            >
              <CardHeader className="flex-row items-center gap-4">
                <span className="border-brasa/40 bg-brasa/10 text-brasa group-hover:brasa-encendida grid size-12 shrink-0 place-items-center border-2 transition-shadow">
                  <Icono className="size-7" />
                </span>
                <div className="space-y-1">
                  <CardTitle>{senal.titulo}</CardTitle>
                  <span className="text-brasa/70 text-[0.6rem] tracking-[0.25em] uppercase">
                    {senal.nota}
                  </span>
                </div>
              </CardHeader>
              <CardDescription>{senal.texto}</CardDescription>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
