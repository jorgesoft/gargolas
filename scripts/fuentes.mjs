#!/usr/bin/env node
/**
 * Alagard no se puede redistribuir por npm, así que el .ttf tiene que
 * bajarlo cada quien a mano. Este script solo comprueba si ya está puesto
 * y, si no, explica exactamente dónde dejarlo.
 */
import { existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..")
const destino = join(raiz, "public", "fonts")
const variantes = ["alagard.woff2", "alagard.ttf"]
const puestas = variantes.filter((f) => existsSync(join(destino, f)))

if (puestas.length > 0) {
  console.log(`✔ Alagard instalada: ${puestas.join(", ")}`)
  process.exit(0)
}

console.log(`
  ✱ Falta la tipografía Alagard.

  El sitio funciona igual (cae en Jacquard 24 / Pixelify Sans), pero los
  rótulos no se verán como deben hasta que la instales:

    1. Descárgala de  https://www.dafont.com/alagard.font
    2. Descomprime el .zip
    3. Copia alagard.ttf a  public/fonts/alagard.ttf

  Opcional, para que pese ~5 veces menos:

    npx wawoff2 compress public/fonts/alagard.ttf
    # deja el resultado como public/fonts/alagard.woff2

  Alagard es obra de Hewett Tsoi, gratuita para uso personal.
  Si Gárgolas la usa comercialmente, escríbele antes.
`)
