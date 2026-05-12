# Bulk System

Herramienta digital para hardgainers que no consiguen subir de peso.

> *"Sube de peso sin contar calorías ni pensar qué hacer cada día."*

## Estructura del proyecto

```
bulk-system/
├── landing/          ← Landing page pública
│   ├── index.html
│   ├── css/
│   └── js/
├── dashboard/        ← Dashboard mockup completo
│   ├── index.html
│   ├── css/
│   └── js/
├── components/       ← Componentes reutilizables
├── docs/             ← Documentación interna
└── README.md
```

## Cómo usar

Abre directamente en el navegador:
- Landing: `landing/index.html`
- Dashboard: `dashboard/index.html`

No requiere build ni servidor. HTML/CSS/JS puro.

## Errores que matan este tipo de proyectos

### 1. Construir demasiado antes de validar
El MVP debe ser lo mínimo que puedas vender.
Landing + dashboard en Notion + pago. Eso es suficiente.
No construyas la v2 antes de vender la v1.

### 2. Obsesionarse con el branding perfecto
El logo no importa. El color exacto no importa.
Lo que importa es que alguien pague por el producto.

### 3. Demasiadas funciones en el dashboard
Un dashboard con 10 secciones que el usuario no usa
es peor que uno con 3 que usa todos los días.

### 4. Esperar a que todo esté perfecto para lanzar
"Perfecto" es el enemigo de "publicado".
Lanza cuando el 70% esté hecho. El 30% restante
lo terminas con feedback real.

### 5. No hablar con usuarios reales
El mayor error es construir lo que tú crees que quieren.
Habla con 5 personas del nicho antes de construir nada.

### 6. Copiar el estilo de apps fitness grandes
MyFitnessPal, Hevy y Trainerize son apps técnicas.
Bulk System es un sistema visual. Son categorías diferentes.
No compitas donde ellos son fuertes.

## Stack
- HTML5 / CSS3 / Vanilla JavaScript
- Fuentes: Syne, DM Sans, JetBrains Mono (Google Fonts)
- Sin dependencias externas
- Compatible con Vercel, Netlify, Framer
