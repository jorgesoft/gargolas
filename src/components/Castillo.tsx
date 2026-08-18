import { cn } from "@/lib/utils"

/**
 * El edificio: silueta recortada, con las ventanas ardiendo. Todo en píxeles
 * duros y sin antialias. El cielo lo pinta la portada por detrás, así que
 * este SVG es transparente y se ancla siempre a la base.
 */
export function Castillo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="piedra-muro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--muro)" />
          <stop offset="60%" stopColor="var(--piedra)" />
          <stop offset="100%" stopColor="var(--ceniza-honda)" />
        </linearGradient>
        <linearGradient id="vidrio" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brasa-viva)" />
          <stop offset="50%" stopColor="var(--brasa)" />
          <stop offset="100%" stopColor="var(--sangre)" />
        </linearGradient>
        <filter id="halo" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Alas laterales, más bajas que el cuerpo central */}
      <g fill="url(#piedra-muro)">
        <path d="M0 108 H36 V100 H44 V108 H60 V96 H72 V200 H0 Z" />
        <path d="M320 108 H284 V100 H276 V108 H260 V96 H248 V200 H320 Z" />
        {/* Cuerpo central con almenas */}
        <path
          d="M72 60
             H84 V44 H96 V60
             H104 V52 H112 V60 H124 V52 H132 V60
             H144 V52 H152 V60 H168 V52 H176 V60
             H188 V52 H196 V60 H208 V52 H216 V60
             H224 V44 H236 V60 H248 V200 H72 Z"
        />
        {/* Torreones cónicos que rematan las esquinas */}
        <path d="M84 44 L90 26 L96 44 Z" />
        <path d="M224 44 L230 26 L236 44 Z" />
      </g>

      {/* Ventanas: la única luz del cuadro */}
      <g>
        {[
          // planta alta
          { x: 96, y: 78, h: 26, d: 0 },
          { x: 132, y: 78, h: 26, d: 1.1 },
          { x: 176, y: 78, h: 26, d: 2.4 },
          { x: 212, y: 78, h: 26, d: 0.6 },
          // planta baja
          { x: 100, y: 128, h: 30, d: 1.8 },
          { x: 208, y: 128, h: 30, d: 3.1 },
          // alas
          { x: 20, y: 132, h: 26, d: 2.2 },
          { x: 288, y: 132, h: 26, d: 0.9 },
        ].map(({ x, y, h, d }) => (
          <g key={`${x}-${y}`} className="animate-parpadeo" style={{ animationDelay: `${d}s` }}>
            <path
              d={`M${x} ${y} L${x + 5} ${y + 7} L${x + 5} ${y + h} L${x - 5} ${y + h} L${x - 5} ${y + 7} Z`}
              fill="url(#vidrio)"
              filter="url(#halo)"
              opacity="0.85"
            />
            <path
              d={`M${x} ${y} L${x + 4} ${y + 6} L${x + 4} ${y + h} L${x - 4} ${y + h} L${x - 4} ${y + 6} Z`}
              fill="url(#vidrio)"
            />
          </g>
        ))}

        {/* El portón: arco grande, luz roja, siempre entreabierto */}
        <g className="animate-respirar">
          <path
            d="M160 118 L172 136 L172 200 L148 200 L148 136 Z"
            fill="url(#vidrio)"
            filter="url(#halo)"
            opacity="0.7"
          />
        </g>
        <path
          d="M160 120 L170 137 L170 200 L150 200 L150 137 Z"
          fill="url(#vidrio)"
        />
      </g>

      {/* La niebla se come la base del edificio */}
      <rect y="176" width="320" height="24" fill="var(--ceniza)" opacity="0.5" />
    </svg>
  )
}
