# Portafolio — Deimer Hernandez

Sitio web personal de Deimer Hernandez, Full Stack Developer. Landing page de una sola página construida con React, TypeScript y Tailwind CSS.

> Estado: en desarrollo. Por ahora incluye el navbar y la sección hero.

## Tecnologías

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- Fuentes: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (títulos) e [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (texto)
- Iconos: [Boxicons](https://boxicons.com/)

## Requisitos

- Node.js 18 o superior
- npm

## Primeros pasos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev
```

## Scripts

| Comando           | Descripción                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR            |
| `npm run build`   | Revisa los tipos con `tsc` y genera el build en `dist/` |
| `npm run preview` | Sirve localmente el build de producción             |
| `npm run lint`    | Ejecuta ESLint sobre los archivos `.ts` y `.tsx`    |

## Estructura del proyecto

```
├── public/
│   └── profile.png          # Foto del hero
├── src/
│   ├── components/
│   │   ├── Button/          # Botón reutilizable (primary / secondary)
│   │   ├── Hero/            # Sección principal
│   │   └── Navbar/          # Barra de navegación (con menú móvil)
│   ├── App.tsx              # Composición de la página
│   ├── index.css            # Tailwind, clases compartidas y estilos globales
│   └── main.tsx             # Punto de entrada
├── index.html               # Fuentes e iconos
└── tailwind.config.js       # Paleta de colores personalizada
```

## Guía de estilo

### Paleta de colores

Definida en [tailwind.config.js](tailwind.config.js):

| Clase              | Color     | Uso                        |
| ------------------ | --------- | -------------------------- |
| `azul-noche`       | `#0B0F2B` | Primario                   |
| `esmeralda`        | `#3ECF8E` | Acento                     |
| `grafito`          | `#1C2033` | Secundario                 |
| `blanco-hueso`     | `#F5F6F8` | Neutro claro               |
| `negro-azulado`    | `#05070F` | Texto sobre fondos claros  |

### Layout compartido

La clase `page-container` (en [src/index.css](src/index.css)) centra el contenido con un ancho máximo de 1440px y márgenes laterales de `px-8` en móvil y `md:px-32` desde `md`. Se usa en el navbar para que su contenido mantenga los mismos márgenes que el resto de la página.

### Componentes

`Button` recibe la prop `type`:

```tsx
<Button type="primary">Get in touch</Button>
<Button type="secondary">See projects</Button>
```

## Despliegue

```bash
npm run build
```

Genera la carpeta `dist/` con archivos estáticos, listos para publicar en cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).
