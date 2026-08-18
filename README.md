# Gárgolas

Página de expectación (*teaser*) para **Gárgolas**, un sitio que todavía no
abre y del que, de momento, no se dice qué es.

Estética tomada de las portadas de caja de los juegos de los noventa: cielo
amarillo enfermo, edificio negro recortado contra él, ventanas ardiendo y un
rótulo rojo sangre. Todo en píxeles duros, sin antialias.

## Stack

| Pieza | Qué es |
| --- | --- |
| [React 19](https://react.dev) + TypeScript | Base de la interfaz |
| [Vite](https://vite.dev) | Servidor de desarrollo y empaquetado |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos y sistema de tokens (`@theme`) |
| [shadcn/ui](https://ui.shadcn.com) | Componentes en `src/components/ui/` (Radix + CVA) |
| [Pixelarticons](https://pixelarticons.com) | Iconografía, 24×24, `currentColor` |
| [Alagard](https://www.dafont.com/alagard.font) | Tipografía de los rótulos |

## Arrancar

```bash
npm install
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Comprobación de tipos + build de producción |
| `npm run preview` | Sirve el build |
| `npm run lint` | oxlint |
| `npm run fuentes` | Comprueba si Alagard está instalada |

## Tipografía

**Alagard** es la tipografía de los rótulos, pero su licencia no permite
redistribuirla, así que el archivo no viene en el repositorio:

1. Descárgala de <https://www.dafont.com/alagard.font>
2. Descomprime el `.zip`
3. Copia `alagard.ttf` a `public/fonts/alagard.ttf`

Opcionalmente, conviértela a WOFF2 (pesa unas cinco veces menos) y déjala
como `public/fonts/alagard.woff2`:

```bash
npx wawoff2 compress public/fonts/alagard.ttf
```

Mientras el archivo no exista, el navegador cae en la pila de respaldo
declarada en `--font-titular` (*Jacquard 24* → *Pixelify Sans* → serif), que se
carga desde Google Fonts en `index.html`. La página funciona igual; solo cambia
el carácter de los rótulos.

Alagard es obra de Hewett Tsoi y es gratuita para uso personal. Si Gárgolas la
va a usar comercialmente, hay que escribirle antes.

## Paleta

Los tokens viven en `src/index.css`, en oklch, y están expuestos como
utilidades de Tailwind (`bg-brasa`, `text-cielo`, `border-muro`…).

| Token | Papel |
| --- | --- |
| `--ceniza`, `--ceniza-honda` | Negros de fondo |
| `--piedra`, `--muro`, `--muro-alto` | Grises y ladrillos del edificio |
| `--brasa`, `--brasa-viva` | Naranja y ámbar de las ventanas encendidas |
| `--sangre`, `--sangre-honda` | Rojo del rótulo |
| `--cielo`, `--cielo-palido`, `--musgo` | Amarillos enfermos del horizonte |

Tres utilidades propias sostienen el aspecto: `text-sangriento` (el rojo del
rótulo con su sombra dura), `brasa-encendida` (resplandor de ventana) y
`marco-piedra` (marco con las esquinas mordidas, sin `border-radius`).

## Estructura

```
src/
  App.tsx                  Montaje de las secciones
  index.css                Tokens, @font-face y utilidades
  data/sitio.ts            TODO el texto y la fecha de apertura
  components/
    Castillo.tsx           Silueta del edificio en SVG
    CuentaAtras.tsx        Contador hasta la apertura
    PixelArt.tsx           Render de mapas ASCII a SVG + gárgola + ventana
    Ruido.tsx              Grano, líneas de tubo y viñeta
    secciones/             Portada, Señales, Vestigios, Lista, Enigmas, Pie
    ui/                    Componentes shadcn/ui
```

### Cambiar el contenido

Casi todo se toca en un único archivo, `src/data/sitio.ts`:

- `APERTURA` — la fecha de apertura; la cuenta atrás se ajusta sola y, al
  llegar a cero, la portada cambia el contador por «La puerta está abierta».
- `marca` — nombre, lema, párrafo de apertura y aviso legal.
- `senales`, `vestigios`, `enigmas`, `enlaces` — el resto de las secciones.

En `vestigios`, marcar una línea con `censurado: true` la pinta tachada en
negro: se puede seleccionar para leerla, que es justo la idea. El pie de la
sección cuenta solo las tachadas, así que no hay que actualizar el número a
mano.

### Añadir componentes de shadcn/ui

`components.json` ya está configurado (estilo *new-york*, alias `@/`, iconos de
Pixelarticons), así que:

```bash
npx shadcn@latest add dialog
```

Los componentes nuevos heredan la paleta y el `--radius: 0` automáticamente.

## Pendiente

- El formulario de `Lista.tsx` simula el envío. Hay un `TODO` donde va la
  llamada real al proveedor de correo.
- Los enlaces de redes en `enlaces` apuntan a cuentas de ejemplo.
