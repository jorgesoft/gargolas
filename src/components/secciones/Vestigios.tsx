import { Eye, EyeOff } from "pixelarticons/react"

import { Separator } from "@/components/ui/separator"
import { vestigios } from "@/data/sitio"

/**
 * Lista de datos filtrados. La mitad va tachada: se puede seleccionar
 * y leer si alguien insiste, que es exactamente la idea.
 */
export function Vestigios() {
  const censuradas = vestigios.filter((v) => v.censurado).length

  return (
    <section className="border-y-2 border-border/70 bg-piedra/40 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 flex items-center gap-4">
          <Separator className="flex-1" />
          <h2 className="text-rotulo text-brasa text-center text-sm tracking-[0.3em]">
            Expediente parcial
          </h2>
          <Separator className="flex-1" />
        </div>

        <ul className="space-y-4">
          {vestigios.map(({ dato, censurado }) => (
            <li key={dato} className="flex items-center gap-4">
              {censurado ? (
                <EyeOff className="text-sangre size-5 shrink-0" />
              ) : (
                <Eye className="text-brasa size-5 shrink-0" />
              )}
              <span
                className={
                  censurado
                    ? "bg-ceniza-honda text-ceniza-honda hover:text-muted-foreground select-all px-2 py-0.5 text-sm transition-colors"
                    : "text-sm text-foreground/85"
                }
                title={censurado ? "No deberías estar leyendo esto" : undefined}
              >
                {dato}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground/60 mt-10 text-center text-xs">
          {censuradas === 1
            ? "Una línea de este expediente fue tapada antes de publicarlo."
            : `${censuradas} líneas de este expediente fueron tapadas antes de publicarlo.`}
        </p>
      </div>
    </section>
  )
}
