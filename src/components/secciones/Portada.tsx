import { ChevronDown } from "pixelarticons/react"

import { Castillo } from "@/components/Castillo"
import { CuentaAtras } from "@/components/CuentaAtras"
import { Gargola } from "@/components/PixelArt"
import { Button } from "@/components/ui/button"
import { APERTURA, marca } from "@/data/sitio"

/**
 * Misma composición que la caja del juego: rótulo rojo sobre cielo amarillo
 * enfermo arriba, edificio negro con las ventanas ardiendo abajo.
 */
export function Portada() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Cielo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--cielo-palido) 0%, var(--cielo) 20%, var(--musgo) 38%, color-mix(in oklab, var(--muro) 65%, var(--musgo)) 50%, var(--ceniza) 66%, var(--ceniza) 100%)",
        }}
      />

      {/* Edificio anclado a la base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] sm:h-[54%]">
        <Castillo />
      </div>

      {/* La oscuridad sube desde abajo para que se pueda leer encima */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] sm:h-[56%] bg-gradient-to-t from-ceniza via-ceniza/72 to-transparent" />

      {/* Bloque alto: gárgola y rótulo, sobre el cielo */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 pt-10 text-center sm:pt-14">
        <Gargola className="animate-flotar h-20 w-auto sm:h-28" />
        <h1 className="text-rotulo text-sangriento text-6xl leading-[0.9] sm:text-8xl lg:text-9xl">
          Gárgolas
        </h1>
        <p className="text-rotulo text-ceniza-honda/85 text-base tracking-[0.3em] sm:text-xl">
          {marca.lema}
        </p>
      </div>

      {/* Bloque bajo: todo lo accionable, ya sobre la piedra oscura */}
      <div className="relative z-10 mt-auto flex w-full flex-col items-center gap-8 px-6 pt-20 pb-20 text-center sm:pb-24">
        {/* Cae justo en el degradado cielo→piedra: la sombra lo hace legible en ambos */}
        <p
          className="max-w-xl text-sm leading-relaxed text-foreground/90 sm:text-base"
          style={{ textShadow: "0 2px 12px var(--ceniza), 0 0 3px var(--ceniza)" }}
        >
          {marca.susurro}
        </p>

        <CuentaAtras objetivo={APERTURA} />

        <div className="flex w-full max-w-md flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="#lista">Entrar en la lista</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#senales">Ver las señales</a>
          </Button>
        </div>

        <p className="border-border/70 text-muted-foreground/80 max-w-xs border-2 px-3 py-1.5 text-center text-[0.6rem] leading-relaxed tracking-[0.18em] uppercase sm:max-w-none sm:text-[0.65rem]">
          {marca.aviso}
        </p>
      </div>

      <a
        href="#senales"
        aria-label="Bajar a las señales"
        className="text-brasa/60 hover:text-brasa absolute inset-x-0 bottom-4 z-10 mx-auto w-fit transition-colors"
      >
        <ChevronDown className="animate-flotar size-8" />
      </a>
    </header>
  )
}
