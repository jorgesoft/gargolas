import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type Restante = { dias: number; horas: number; minutos: number; segundos: number }

function calcular(objetivo: Date): Restante {
  const delta = Math.max(0, objetivo.getTime() - Date.now())
  const s = Math.floor(delta / 1000)
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    minutos: Math.floor((s % 3600) / 60),
    segundos: s % 60,
  }
}

export function useCuentaAtras(objetivo: Date) {
  const [restante, setRestante] = useState(() => calcular(objetivo))

  useEffect(() => {
    const id = setInterval(() => setRestante(calcular(objetivo)), 1000)
    return () => clearInterval(id)
  }, [objetivo])

  return restante
}

function Casilla({ valor, etiqueta }: { valor: number; etiqueta: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "marco-piedra flex min-w-[4.5rem] items-center justify-center px-3 py-3 sm:min-w-[6rem] sm:px-5 sm:py-4",
          "shadow-[0_0_2.5rem_-0.5rem_color-mix(in_oklab,var(--brasa)_45%,transparent)]"
        )}
      >
        <span className="text-rotulo text-brasa-viva text-4xl leading-none tabular-nums sm:text-6xl">
          {String(valor).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase sm:text-xs">
        {etiqueta}
      </span>
    </div>
  )
}

export function CuentaAtras({
  objetivo,
  className,
}: {
  objetivo: Date
  className?: string
}) {
  const { dias, horas, minutos, segundos } = useCuentaAtras(objetivo)
  const terminado = dias + horas + minutos + segundos === 0

  if (terminado) {
    return (
      <p
        className={cn(
          "text-rotulo text-sangriento animate-parpadeo text-3xl sm:text-5xl",
          className
        )}
      >
        La puerta está abierta
      </p>
    )
  }

  return (
    <div className={cn("flex items-start justify-center gap-2 sm:gap-4", className)}>
      <Casilla valor={dias} etiqueta="Días" />
      <Casilla valor={horas} etiqueta="Horas" />
      <Casilla valor={minutos} etiqueta="Min" />
      <Casilla valor={segundos} etiqueta="Seg" />
    </div>
  )
}
