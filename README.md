# Mapas Bot Web Component

Este es un componente web creado con Lit que permite mostrar los mapas del mod de los lunituns. El componente está diseñado para ser fácil de integrar en cualquier página web y mostrar mapas de manera responsiva.

## Requisitos

- Node.js (versión 14 o superior)
- Navegador moderno con soporte para Web Components

## Instalación

1. Instala las dependencias:
```bash
npm install
```

## Uso

Para usar el componente en tu HTML:

```html
<mapas-bot name="nombre-del-mapa"></mapas-bot>
```

El componente buscará automáticamente la imagen correspondiente en la carpeta `images/` con el nombre especificado.

### Estructura de carpetas requerida

```
tu-proyecto/
├── images/
│   ├── mapa1.png
│   ├── mapa2.png
│   └── ...
└── index.html
```

### Ejemplo:
Si tienes una imagen llamada `mapa1.png` en la carpeta `images/`, puedes mostrarla así:

```html
<mapas-bot name="mapa1"></mapas-bot>
```

### Atributos disponibles

| Atributo | Tipo | Descripción |
|----------|------|-------------|
| name | String | Nombre del mapa (sin extensión) que se buscará en la carpeta images/ |

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Esto abrirá automáticamente tu navegador con la página de demostración. 