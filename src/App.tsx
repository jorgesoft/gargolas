import { Ruido } from "@/components/Ruido"
import { Enigmas } from "@/components/secciones/Enigmas"
import { Lista } from "@/components/secciones/Lista"
import { Pie } from "@/components/secciones/Pie"
import { Portada } from "@/components/secciones/Portada"
import { Senales } from "@/components/secciones/Senales"
import { Vestigios } from "@/components/secciones/Vestigios"

export default function App() {
  return (
    <>
      <Ruido />
      <main>
        <Portada />
        <Senales />
        <Vestigios />
        <Lista />
        <Enigmas />
      </main>
      <Pie />
    </>
  )
}
