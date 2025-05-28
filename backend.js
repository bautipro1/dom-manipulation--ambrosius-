// creacion del documento en si
document.addEventListener("DOMContentLoaded", () => {
  const boton_agregar_tarjeta = document.getElementById("boton_agregar_tarjeta");
  const contenedor_tarjeta = document.getElementById("contenedor_tarjeta");

  // boton responsable de agregar la tarjeta
  boton_agregar_tarjeta.addEventListener("click", () => {
    // crea el contenedor y su clase
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    // creacion de la imagen de la tarjeta
    const imagen = document.createElement("img");
    imagen.src = "img_abeja.png";
    imagen.alt = "Imagen tarjeta";

    // creacion del titulo y la descripcion
    const titulo = createEditableField("Título de la tarjeta");
    const descripcion = createEditableField("Descripción de ejemplo");

    // creacion del boton para eliminar la tarjeta
    const boton_eliminar = document.createElement("button");
    boton_eliminar.textContent = "Eliminar Tarjeta";
    boton_eliminar.className = "boton_eliminar";

    // funcion que elimina la tarjeta con "remove"
    boton_eliminar.addEventListener("click", () => {
      tarjeta.remove();
    });

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(boton_eliminar);

    contenedor_tarjeta.appendChild(tarjeta);
  });

  function createEditableField(text) {
    const contenedor = document.createElement("div");
    contenedor.className = "editable";

    const span = document.createElement("span");
    span.textContent = text;
    span.setAttribute("contenteditable", "false");

    const icono = document.createElement("i");
    icono.innerHTML = "&#9998;";
    icono.title = "Editar";

    icono.addEventListener("click", () => {
      const editable = span.getAttribute("contenteditable") === "true";
      span.setAttribute("contenteditable", !editable);
      span.focus();
    });

    contenedor.appendChild(span);
    contenedor.appendChild(icono);

    return contenedor;
  }
});
