/**
 * Capas de atmósfera: grano de escáner, líneas de tubo y viñeta.
 * Todo decorativo, todo por encima del contenido pero sin capturar el ratón.
 */
export function Ruido() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Grano: la portada original está escaneada de una caja de cartón */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='r'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23r)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Líneas horizontales de monitor viejo */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* Viñeta: la luz solo llega al centro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 42%, transparent 38%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </div>
  )
}
