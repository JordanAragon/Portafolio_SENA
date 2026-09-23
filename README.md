# Portafolio SENA — Jordan David Aragon

Portafolio de servicios y proyectos construido con React, Vite, CSS, HTML, JavaScript y Tailwind CSS.

## Estructura

```text
src/
├── assets/
├── components/
│   ├── BentoCard.jsx
│   ├── ProjectItem.jsx
│   └── TechBadge.jsx
├── layouts/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── BentoAbout.jsx
│   ├── WorkExperience.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css
```

La interfaz usa HTML semántico y evita `div` en la estructura visible de React. El diseño se mantiene deliberadamente simple: tipografía grande, bento grid, sticky scroll, contraste alto y microinteracciones pequeñas.

## Referencias de dirección visual

La composición toma como referencia patrones presentes en Awwwards: bento grid interactivo, portfolios tipográficos, dark mode y scroll portfolio. No se copia una web concreta; se reutilizan patrones de composición y jerarquía visual.

- https://www.awwwards.com/inspiration/interavtive-bento-grid-with-hover-and-scroll-effects-pixlspace-creative-studio
- https://www.awwwards.com/inspiration/typographic-personal-portfolio
- https://www.awwwards.com/inspiration/home-page-dark-mode-raw-2
- https://www.awwwards.com/inspiration/scroll-portfolio

## Desarrollo

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
npm run preview
```

No se agregan imágenes ficticias. Las capturas reales de AiDEN, Aragon Server e Inventario FNC pueden entrar posteriormente en `src/assets/`.
