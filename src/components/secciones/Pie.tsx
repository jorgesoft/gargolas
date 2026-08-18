import { Castle } from "pixelarticons/react"

import { VentanaEncendida } from "@/components/PixelArt"
import { Separator } from "@/components/ui/separator"
import { enlaces, marca } from "@/data/sitio"

export function Pie() {
  return (
    <footer className="border-t-2 border-border/70 bg-ceniza-honda/70">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Una hilera de ventanas encendidas, como la fachada vista de lejos */}
        <div className="mb-12 flex items-end justify-center gap-4 opacity-70">
          {[0, 1.4, 0.7, 2.6, 1.9].map((retraso, i) => (
            <VentanaEncendida key={i} retraso={retraso} className="h-10 w-auto" />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <Castle className="text-brasa size-6" />
            <span className="text-rotulo text-sangriento text-2xl">
              {marca.nombre}
            </span>
          </div>

          <p className="text-muted-foreground max-w-md text-xs leading-relaxed">
            Todavía no existe. Cuando exista, tampoco lo va a anunciar nadie.
          </p>

          <nav className="flex items-center gap-1 text-xs">
            {enlaces.map((enlace, i) => (
              <span key={enlace.etiqueta} className="flex items-center gap-1">
                {i > 0 && <span className="text-border px-2">·</span>}
                <a
                  href={enlace.url}
                  target={enlace.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-brasa tracking-[0.2em] uppercase transition-colors"
                >
                  {enlace.etiqueta}
                </a>
              </span>
            ))}
          </nav>

          <Separator className="my-2 max-w-xs" />

          <p className="text-muted-foreground/50 text-[0.65rem] tracking-[0.2em] uppercase">
            {marca.aviso}
          </p>
          <p className="text-muted-foreground/40 text-[0.65rem]">
            © {new Date().getFullYear()} {marca.nombre}. Bebe con cabeza.
          </p>
        </div>
      </div>
    </footer>
  )
}
