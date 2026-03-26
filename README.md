# Study with Structure

Sitio web de estudio publicado con **GitHub Pages**.

## 🚀 Publicación con GitHub Pages

Este repositorio se publica automáticamente en GitHub Pages mediante GitHub Actions cada vez que se hace un `push` a la rama `main`.

**URL del sitio:** `https://acordero0369.github.io/Study-with-structure.github.io/`

### Activar GitHub Pages (primera vez)

1. Ve a **Settings → Pages** en tu repositorio.
2. En **Source**, selecciona **GitHub Actions**.
3. Haz un `push` a `main` para disparar el primer despliegue.

## 🔗 Usar contenido de otro repositorio

El flujo de trabajo `.github/workflows/deploy.yml` incluye un paso opcional que clona un repositorio externo y copia su contenido a la carpeta `external/` del sitio.

Para activarlo, edita la variable en el workflow:

```yaml
env:
  EXTERNAL_REPO: "https://github.com/owner/otro-repositorio.git"
```

Reemplaza `owner/otro-repositorio` con el repositorio que deseas incluir.

## 📁 Estructura del proyecto

```
.
├── index.html                  # Página principal del sitio
├── external/                   # Contenido del repositorio externo (generado en CI)
└── .github/
    └── workflows/
        └── deploy.yml          # Flujo de trabajo de GitHub Actions
```