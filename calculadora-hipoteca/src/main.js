function init() {
  console.log("Iniciando aplicación...");

  // --- Ejercicio 2: variables primitivas ---
  let precioVivienda = 0;
  let porcentajeFinanciacion = 80;
  let isFavorite = false;

  let nombre = "Mi escenario";
  let esFavorito = false;
  let precio = 200000;

  console.log(precioVivienda);
  console.log(porcentajeFinanciacion);
  console.log(isFavorite);

  console.log(nombre);
  console.log(esFavorito);
  console.log(precio);

  // Conversión a string
  let precioString = precio.toString();
  console.log(precioString);

  // --- Ejercicio 2: formulario ---
  const form = document.getElementById("calc-form");
  form.addEventListener("submit", handleFormSubmit);

  console.log("Aplicación cargada correctamente");
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const precioVivienda = parseFloat(formData.get("precio-vivienda"));
  const porcentajeFinanciacion = parseFloat(formData.get("porcentaje-financiacion"));
  const plazo = parseFloat(formData.get("plazo"));
  const interes = parseFloat(formData.get("interes"));
  const fechaInicio = formData.get("fecha-inicio");

  console.log(precioVivienda);
  console.log(porcentajeFinanciacion);
  console.log(plazo);
  console.log(interes);
  console.log(fechaInicio);
}

document.addEventListener("DOMContentLoaded", init);
