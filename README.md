# Study with Structure

Sitio web de estudio publicado con **GitHub Pages**.

**URL del sitio:** `https://acordero0369.github.io/Study-with-structure.github.io/`

## 📁 Estructura del proyecto

```
.
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos del sitio
├── js/
│   └── main.js             # JavaScript (navegación activa)
├── pages/
│   ├── math.html           # Matemáticas
│   ├── programming.html    # Programación
│   ├── science.html        # Ciencias
│   └── languages.html      # Idiomas
└── .github/
    └── workflows/
        └── deploy.yml      # Despliegue automático en GitHub Pages
```

## 🚀 Publicación con GitHub Pages

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions
cada vez que se hace un `push` a la rama `main`.

### Activar GitHub Pages (primera vez)

1. Ve a **Settings → Pages** en tu repositorio.
2. En **Source**, selecciona **GitHub Actions**.
3. Haz un `push` a `main` para lanzar el primer despliegue.