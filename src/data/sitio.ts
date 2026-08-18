/**
 * Todo el texto del sitio vive aquí.
 * Regla de oro: nunca decimos qué es Gárgolas. Solo insinuamos.
 */

/** Fecha de apertura. Cámbiala y la cuenta atrás se ajusta sola. */
export const APERTURA = new Date("2026-10-31T22:00:00-06:00")

export const marca = {
  nombre: "Gárgolas",
  lema: "Algo despierta bajo la piedra",
  susurro:
    "Llevan seiscientos años ahí arriba, mirando la calle sin decir nada. Este otoño bajan.",
  aviso: "Solo mayores de edad · Aforo limitado · Sin letrero en la puerta",
} as const

export type Senal = {
  icono: "puerta" | "fuego" | "sonido" | "regla"
  titulo: string
  texto: string
  nota: string
}

export const senales: Senal[] = [
  {
    icono: "puerta",
    titulo: "La puerta",
    texto:
      "No habrá cartel, ni fila, ni nadie gritando tu nombre. Habrá una aldaba de bronce fría y una hora exacta.",
    nota: "Toca tres veces",
  },
  {
    icono: "fuego",
    titulo: "El fuego",
    texto:
      "Las ventanas del edificio llevan encendidas desde antes de que existiera la calle. Nadie de por aquí recuerda quién las prendió.",
    nota: "Nunca se apagan",
  },
  {
    icono: "sonido",
    titulo: "El sonido",
    texto:
      "Se oye desde la acera de enfrente, bajo, constante, como si el suelo estuviera respirando. Solo lo notas si vienes solo.",
    nota: "Baja desde el sótano",
  },
  {
    icono: "regla",
    titulo: "La regla",
    texto:
      "Una sola, y no es negociable: lo que pasa bajo las gárgolas se queda bajo las gárgolas.",
    nota: "No hay segunda",
  },
]

/** Lo poco que estamos dispuestos a admitir. Lo demás va tachado. */
export const vestigios: { dato: string; censurado?: boolean }[] = [
  { dato: "Se entra de noche" },
  { dato: "Hay escaleras. Muchas" },
  { dato: "El sótano tiene ochocientos años", censurado: true },
  { dato: "No sirve el teléfono adentro" },
  { dato: "La carta cambia con la luna", censurado: true },
  { dato: "Nadie sale igual que entró" },
]

export const enigmas: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: "¿Qué es Gárgolas exactamente?",
    respuesta:
      "Lo sabrás cuando cruces la puerta y no antes. Podríamos escribirlo aquí, pero perdería la mitad de la gracia y toda la ventaja.",
  },
  {
    pregunta: "¿Es un bar, un club, otra cosa?",
    respuesta:
      "Digamos que hay vasos, hay hielo y hay alguien detrás de una barra de piedra. Eso es todo lo que vamos a admitir por escrito.",
  },
  {
    pregunta: "¿Cuándo abren?",
    respuesta:
      "Cuando el contador llegue a cero. Ni un minuto antes, ni un minuto después. Las gárgolas son puntuales.",
  },
  {
    pregunta: "¿Dónde están?",
    respuesta:
      "En el casco viejo. Camina despacio y mira hacia arriba: llevan siglos observándote desde la cornisa. Ahora, por fin, te devuelven la mirada.",
  },
  {
    pregunta: "¿Hace falta reservar?",
    respuesta:
      "Hace falta que te dejen entrar, que no es lo mismo. La lista es la única forma de que tu nombre esté escrito en la piedra esa noche.",
  },
  {
    pregunta: "¿Puedo llevar gente?",
    respuesta:
      "Trae a quien aguante la escalera y sepa cuándo callarse. A los demás, mejor déjalos arriba.",
  },
]

export const enlaces = [
  { etiqueta: "Instagram", url: "https://instagram.com/gargolas" },
  { etiqueta: "Correo", url: "mailto:hola@gargolas.club" },
] as const
