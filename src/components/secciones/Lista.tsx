import { useState } from "react"
import { CheckDouble, Mail } from "pixelarticons/react"

import { Gargola } from "@/components/PixelArt"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Estado = "inactivo" | "enviando" | "dentro"

export function Lista() {
  const [correo, setCorreo] = useState("")
  const [estado, setEstado] = useState<Estado>("inactivo")

  async function inscribir(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEstado("enviando")
    // TODO: conectar con el proveedor de correo real cuando exista backend.
    await new Promise((r) => setTimeout(r, 900))
    setEstado("dentro")
  }

  return (
    <section id="lista" className="relative scroll-mt-20 overflow-hidden py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 50%, color-mix(in oklab, var(--brasa) 16%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-xl px-6 text-center">
        <Gargola className="animate-flotar mx-auto mb-8 h-20 w-auto" />

        <h2 className="text-rotulo text-sangriento mb-4 text-4xl sm:text-5xl">
          Escribe tu nombre en la piedra
        </h2>
        <p className="text-muted-foreground mb-10 text-sm leading-relaxed sm:text-base">
          Los de la lista reciben la dirección exacta y la hora una semana antes
          que nadie. Los demás pasarán por delante sin saber que estaban delante.
        </p>

        {estado === "dentro" ? (
          <div className="marco-piedra brasa-encendida flex flex-col items-center gap-3 px-6 py-10">
            <CheckDouble className="text-brasa size-10" />
            <p className="text-rotulo text-cielo text-2xl">Anotado</p>
            <p className="text-muted-foreground max-w-sm text-sm">
              No respondas a este correo. No hace falta. Sabremos que eres tú
              cuando toques la puerta.
            </p>
          </div>
        ) : (
          <form onSubmit={inscribir} className="space-y-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="correo">
                <Mail className="size-4" />
                Tu correo
              </Label>
              <Input
                id="correo"
                type="email"
                required
                autoComplete="email"
                placeholder="alguien@enlasombra.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                disabled={estado === "enviando"}
              />
            </div>

            <Button
              type="submit"
              variant="brasa"
              size="lg"
              className="w-full"
              disabled={estado === "enviando"}
            >
              {estado === "enviando" ? "Grabando…" : "Quiero estar dentro"}
            </Button>

            <p className="text-muted-foreground/70 text-center text-[0.7rem] leading-relaxed">
              Un correo, puede que dos. Nada de publicidad, nada de vender tu
              dirección a nadie. Te puedes borrar cuando quieras.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
