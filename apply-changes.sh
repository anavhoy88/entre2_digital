#!/bin/bash
# =============================================================
# apply-changes.sh
# Aplica todas las mejoras al repositorio de GitHub
# Uso: bash apply-changes.sh
# =============================================================

set -e

REPO_URL="https://github.com/anavhoy88/entre2_digital.git"
REPO_DIR="entre2_digital"
CHANGES_DIR="$(dirname "$0")"

echo "📦 Clonando repositorio..."
git clone "$REPO_URL" "$REPO_DIR"
cd "$REPO_DIR"

echo "📝 Aplicando cambios..."

# index.html — meta SEO
cp "$CHANGES_DIR/index.html" ./index.html

# .env.example — nueva variable WhatsApp
cp "$CHANGES_DIR/.env.example" ./.env.example

# src/constants.ts — número desde variable de entorno
cp "$CHANGES_DIR/src/constants.ts" ./src/constants.ts

# Componentes
cp "$CHANGES_DIR/src/components/Navbar.tsx"    ./src/components/Navbar.tsx
cp "$CHANGES_DIR/src/components/Hero.tsx"      ./src/components/Hero.tsx
cp "$CHANGES_DIR/src/components/Services.tsx"  ./src/components/Services.tsx
cp "$CHANGES_DIR/src/components/Portfolio.tsx" ./src/components/Portfolio.tsx

echo "✅ Haciendo commit y push..."
git add .
git commit -m "feat: mejoras de diseño, usabilidad y seguridad

- SEO: meta tags, Open Graph y Twitter Card en index.html
- Seguridad: número WhatsApp movido a variable de entorno (VITE_WHATSAPP_NUMBER)
- Navbar: sección activa marcada con IntersectionObserver
- Hero: layout de dos columnas con collage de proyectos
- Services: hover con color de fondo por categoría
- Portfolio: estado vacío, lazy loading en imágenes, noopener en window.open
- Accesibilidad: aria-label en botones de menú y modal"

git push origin main

echo ""
echo "🎉 ¡Listo! Cambios subidos a GitHub."
echo ""
echo "⚠️  IMPORTANTE: Añade VITE_WHATSAPP_NUMBER=34661226784 a:"
echo "   - Tu archivo .env.local (desarrollo local)"
echo "   - Las variables de entorno de tu hosting (producción)"
