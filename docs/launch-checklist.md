# Checklist de lanzamiento — Bulk System

## Semana 1 — Fundación
- [ ] Crear estructura de archivos del proyecto
- [ ] Configurar sistema de diseño (variables CSS)
- [ ] Construir componentes base (botones, cards, badges)
- [ ] Landing page: hero + navbar completados
- [ ] Registrar dominio (bulksystem.es / bulksystem.com)
- [ ] Crear cuenta en Gumroad o Stripe
- [ ] Crear plantilla de Notion maestra

## Semana 2 — Producto
- [ ] Landing page completa (todas las secciones)
- [ ] Dashboard mockup interactivo
- [ ] Responsive mobile verificado
- [ ] Animaciones y microinteracciones
- [ ] Conectar CTA con página de pago (Gumroad/Stripe)
- [ ] Sistema de entrega automática del dashboard

## Semana 3 — Validación
- [ ] Deploy de la landing (Vercel / Netlify / Framer)
- [ ] Primeros 3 beta testers (gratis o precio reducido)
- [ ] Recibir feedback real del producto
- [ ] Ajustar copy de la landing según feedback
- [ ] Crear primeros 3 vídeos de TikTok/Instagram

## Semana 4 — Crecimiento
- [ ] Publicar primeros contenidos de redes sociales
- [ ] Conseguir las primeras 5 ventas reales
- [ ] Documentar testimonios y resultados
- [ ] Ajustar precio si es necesario
- [ ] Planificar siguiente iteración del producto

## Deploy rápido (Vercel)
```bash
# Instala Vercel CLI
npm i -g vercel

# Desde la carpeta raíz del proyecto
vercel deploy

# Para producción
vercel --prod
```

## Deploy rápido (Netlify)
```bash
# Drag & drop de la carpeta 'landing/' en netlify.com/drop
# O via CLI:
npm i -g netlify-cli
netlify deploy --dir=landing
netlify deploy --dir=landing --prod
```
