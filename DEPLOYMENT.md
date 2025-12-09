# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu proyecto Vue + Vite en GitHub Pages paso a paso.

## 📋 Archivos Configurados

### 1. `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/landing-iterar/', // ⚠️ Nombre de tu repositorio
})
```

### 2. `package.json` - Sección Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🔧 Instalación y Despliegue

### Paso 1: Navegar a la carpeta frontend
```bash
cd frontend
```

### Paso 2: Instalar dependencias (si no lo has hecho)
```bash
npm install
```

### Paso 3: Instalar gh-pages como dependencia de desarrollo
```bash
npm install gh-pages --save-dev
```

### Paso 4: Construir el proyecto
```bash
npm run build
```
Este comando genera la carpeta `dist` con los archivos optimizados para producción.

### Paso 5: Desplegar a GitHub Pages
```bash
npm run deploy
```
Este comando sube el contenido de `dist` a la rama `gh-pages` automáticamente.

## ⚙️ Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/gasparin52/landing-iterar`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Haz clic en **Save**
6. Espera 1-2 minutos mientras GitHub despliega tu sitio

## 🌐 URL del Proyecto

Tu sitio estará disponible en:
```
https://gasparin52.github.io/landing-iterar/
```

## 📝 Checklist de Despliegue

- [ ] Navegar a la carpeta `frontend`
- [ ] Ejecutar `npm install` (primera vez)
- [ ] Ejecutar `npm install gh-pages --save-dev` (primera vez)
- [ ] Ejecutar `npm run build`
- [ ] Ejecutar `npm run deploy`
- [ ] Ir a GitHub → Repositorio → Settings → Pages
- [ ] Seleccionar rama `gh-pages` y carpeta `/`
- [ ] Guardar y esperar el despliegue
- [ ] Verificar el sitio en `https://gasparin52.github.io/landing-iterar/`

## 🔄 Redespliegue (actualizaciones futuras)

Cuando hagas cambios en tu código y quieras actualizarlo en GitHub Pages:

```bash
cd frontend
npm run build
npm run deploy
```

¡Listo! GitHub Pages actualizará automáticamente tu sitio en 1-2 minutos.

## ⚠️ Notas Importantes

1. **Archivo `.nojekyll`**: Ya está creado en `public/.nojekyll`. Este archivo le dice a GitHub Pages que no use Jekyll para procesar los archivos.

2. **Base URL**: La propiedad `base: '/landing-iterar/'` en `vite.config.js` es **crítica**. Debe coincidir exactamente con el nombre de tu repositorio.

3. **Rama gh-pages**: El script `deploy` crea y gestiona automáticamente la rama `gh-pages`. No necesitas crearla manualmente.

4. **Primera vez**: La primera vez que despliegues, puede tardar hasta 5 minutos en estar disponible.

## 🐛 Solución de Problemas

### El sitio muestra una página en blanco
- Verifica que `base` en `vite.config.js` sea exactamente `/landing-iterar/`
- Verifica que GitHub Pages esté configurado en la rama `gh-pages`

### Los assets no cargan (CSS/JS/imágenes)
- El problema es la `base` incorrecta en `vite.config.js`
- Asegúrate de que sea `/landing-iterar/` (con las barras)

### El comando `npm run deploy` falla
- Verifica que `gh-pages` esté instalado: `npm install gh-pages --save-dev`
- Verifica que hayas ejecutado `npm run build` primero
- Verifica que tengas permisos en el repositorio

## 📚 Comandos Rápidos

```bash
# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Vista previa local del build
npm run preview

# Desplegar a GitHub Pages
npm run deploy
```

---

**¡Tu landing page está lista para el mundo! 🎉**
