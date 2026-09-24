# Portafolio SENA — Jordan David Aragon

Portafolio de servicios y proyectos construido con React, Vite, JavaScript y CSS.

## Estructura

```text
src/
├── assets/
├── components/
│   ├── Encabezado.jsx
│   ├── Inicio.jsx
│   ├── SobreMi.jsx
│   ├── Servicios.jsx
│   ├── Proyectos.jsx
│   ├── Experiencia.jsx
│   └── PiePagina.jsx
├── App.jsx
├── main.jsx
└── index.css
```

Cada sección del portafolio tiene su propio componente. El contenido de cada sección está
al principio de su archivo para poder editarlo rápidamente sin buscarlo por todo el proyecto.

No se usan librerías externas de UI, iconos o animaciones. El diseño se construye con React y
CSS para mantener el proyecto pequeño y fácil de explicar.

## Ejecutar

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
npm run preview
```

## Proyectos

- AiDEN
- Aragon Server
- Inventario FNC

Las imágenes reales de los proyectos pueden agregarse posteriormente en `src/assets/`.
