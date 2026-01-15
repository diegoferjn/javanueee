function init() {
  console.log("Iniciando aplicación...");

  // Variables primitivas (tal cual pide el enunciado)
  let precioVivienda = 0;
  let porcentajeFinanciacion = 80;
  let isFavorite = false;

  let nombre = "Mi escenario";
  let esFavorito = false;
  let precio = 200000;

  // Imprimir cada variable por separado
  console.log(precioVivienda);
  console.log(porcentajeFinanciacion);
  console.log(isFavorite);

  console.log(nombre);
  console.log(esFavorito);
  console.log(precio);

  // Convertir precio a string con toString() e imprimirlo
  console.log(precio.toString());

  // Formulario: seleccionar y añadir listener submit en init()
  const form = document.getElementById("calc-form");
  form.addEventListener("submit", handleFormSubmit);

  console.log("Aplicación cargada correctamente");
}

function handleFormSubmit(event) {
  event.preventDefault();

  // Obtener valores con FormData
  const formData = new FormData(event.target);

  const precioVivienda = parseFloat(formData.get("precio-vivienda"));
  const porcentajeFinanciacion = parseFloat(formData.get("porcentaje-financiacion"));
  const plazo = parseFloat(formData.get("plazo"));
  const interes = parseFloat(formData.get("interes"));
  const fechaInicio = formData.get("fecha-inicio");

  // Imprimir valores
  console.log(precioVivienda);
  console.log(porcentajeFinanciacion);
  console.log(plazo);
  console.log(interes);
  console.log(fechaInicio);
}

document.addEventListener("DOMContentLoaded", init);
