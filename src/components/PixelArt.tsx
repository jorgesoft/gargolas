import { useId } from "react"

import { cn } from "@/lib/utils"

/**
 * Dibuja un mapa de píxeles ASCII como SVG.
 * '.' o ' ' = vacío · cualquier otro carácter = un píxel del color de esa clave.
 */
export function MapaPixel({
  mapa,
  colores,
  className,
  ...props
}: {
  mapa: string[]
  colores: Record<string, string>
  className?: string
} & Omit<React.SVGProps<SVGSVGElement>, "viewBox">) {
  const ancho = Math.max(...mapa.map((f) => f.length))
  const alto = mapa.length

  return (
    <svg
      viewBox={`0 0 ${ancho} ${alto}`}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {mapa.flatMap((fila, y) =>
        [...fila].map((c, x) => {
          const color = colores[c]
          if (!color) return null
          return (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />
          )
        })
      )}
    </svg>
  )
}

/** Gárgola encaramada en la cornisa. '#' piedra, '=' cornisa, 'o' ojo encendido. */
const GARGOLA = [
  "............#..#............",
  "...........##..##...........",
  "..#.......########.......#..",
  "..##.....##########.....##..",
  ".###.....##.o##o.##.....###.",
  "####.....##########.....####",
  "#####.....########.....#####",
  ".#####.....######.....#####.",
  "..#####...##########...####.",
  "...####..############..###..",
  "....###.##############.##...",
  ".....##.##############.#....",
  "......#.##############......",
  "........##############......",
  "........####......####......",
  ".......#####......#####.....",
  "......##..###....###..##....",
  ".....##....##....##....##...",
  "....###....###..###....###..",
  "============================",
  "============================",
]

export function Gargola({
  className,
  ...props
}: { className?: string } & Omit<React.SVGProps<SVGSVGElement>, "viewBox">) {
  return (
    <MapaPixel
      mapa={GARGOLA}
      colores={{
        "#": "var(--muro)",
        "=": "var(--piedra)",
        o: "var(--brasa)",
      }}
      className={cn("drop-shadow-[0_0_1.5rem_rgba(0,0,0,0.8)]", className)}
      {...props}
    />
  )
}

/** Ventana ojival encendida: el detalle que define la portada. */
export function VentanaEncendida({
  className,
  retraso = 0,
}: {
  className?: string
  retraso?: number
}) {
  const id = useId()

  return (
    <svg
      viewBox="0 0 12 28"
      shapeRendering="crispEdges"
      className={cn("animate-parpadeo", className)}
      style={{ animationDelay: `${retraso}s` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brasa-viva)" />
          <stop offset="55%" stopColor="var(--brasa)" />
          <stop offset="100%" stopColor="var(--sangre)" />
        </linearGradient>
      </defs>
      <path
        d="M6 0 L10 5 L10 28 L2 28 L2 5 Z"
        fill={`url(#${id})`}
      />
    </svg>
  )
}
