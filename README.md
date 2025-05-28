# **Tarjetas Dinámicas**

## Descripción del Proyecto

Este proyecto es una aplicación web simple que permite al usuario crear, editar y eliminar tarjetas visuales de manera interactiva. Cada tarjeta incluye una imagen, un título editable y una descripción, todo controlado mediante JavaScript y manipulaciones del DOM. Es una herramienta ideal para aprender a manejar eventos, crear elementos dinámicamente y trabajar con estilos modernos en HTML5, CSS3 y JavaScript ES6+.

---

## Instrucciones de Instalación

1. **Clonar o descargar el repositorio:**

   ```bash
   git clone <dom-manipulatio-<ambrosius>>
   ```

   O simplemente descarga y descomprime el ZIP si estás trabajando localmente.

2. **Abrir el archivo HTML:**

   * Navega a la carpeta del proyecto.
   * Abre el archivo `index.html` con cualquier navegador moderno.

---

## Uso

* **Agregar una tarjeta:**
  Haz clic en el botón **“Agregar Tarjeta”**. Se generará automáticamente una nueva tarjeta con una imagen, un título editable, una descripción y un botón de eliminar.

* **Editar título o descripción:**
  Haz clic en el ícono de lápiz junto al título o la descripción para habilitar la edición. Luego puedes modificar el contenido directamente.

* **Eliminar una tarjeta:**
  Haz clic en el botón rojo **“Eliminar Tarjeta”** dentro de la tarjeta que deseas borrar.

---

## Estructura del Proyecto

```
/
├── index.html         # Archivo principal de la página
├── estilos.css        # Estilos visuales del sitio
├── backend.js         # Lógica JavaScript para manejo del DOM
└── img_abeja.png      # Imagen usada por defecto en las tarjetas (debe agregarse)
```

---

## Tecnologías Utilizadas

* **HTML5**: Estructura semántica básica de la página.
* **CSS3**: Estilos visuales, incluyendo flexbox, botones personalizados y efectos hover.
* **JavaScript ES6+**: Creación y manejo de elementos del DOM, eventos y funciones anónimas.

---

## Decisiones de Diseño

El proyecto se diseñó para tener una interacción limpia y amigable. El DOM se manipula directamente usando `document.createElement` y `appendChild` para generar tarjetas dinámicamente.

Ejemplo clave:

```javascript
const tarjeta = document.createElement("div");
tarjeta.className = "tarjeta";
```

Cada tarjeta incluye componentes reutilizables como los campos editables. Estos se crean mediante la función:

```javascript
function createEditableField(text) {
  // Crea un contenedor con <span> editable y un ícono para activarlo
}
```

Esto permite evitar código repetido y mejora la legibilidad.

---

## Retos y Aprendizajes

Uno de los principales retos fue la gestión de la edición de campos de texto sin utilizar frameworks externos. Opté por usar `contenteditable` en combinación con íconos para activarlo manualmente, lo cual requirió atención especial al enfoque del elemento y a mantener la interfaz intuitiva para el usuario.

También aprendí a crear una arquitectura de archivos limpia, separando claramente lógica (JavaScript), estructura (HTML) y estilos (CSS). Esto no solo facilita el mantenimiento, sino que permite escalar el proyecto más fácilmente si se desea agregar almacenamiento local, más campos o interacciones en el futuro.