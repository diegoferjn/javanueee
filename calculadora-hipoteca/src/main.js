let form;

function init() {
  console.log("Iniciando aplicación...");

  // (Se mantiene del ejercicio 2) Variables primitivas
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

  console.log(precio.toString());

  // (Ejercicio 3) Seleccionar formulario con variable global form
  form = document.getElementById("calc-form");
  form.addEventListener("submit", handleFormSubmit);

  console.log("Aplicación cargada correctamente");
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  // --- Ejercicio 3.1: Manejar valores opcionales (null) ---
  const precioViviendaRaw = formData.get("precio-vivienda");
  if (precioViviendaRaw === null) {
    console.log("precio-vivienda es null");
  } else {
    console.log("precio-vivienda tiene valor:", precioViviendaRaw);
  }

  const porcentajeFinanciacionRaw = formData.get("porcentaje-financiacion");
  if (porcentajeFinanciacionRaw === null) {
    console.log("porcentaje-financiacion es null");
  } else {
    console.log("porcentaje-financiacion tiene valor:", porcentajeFinanciacionRaw);
  }

  const plazoRaw = formData.get("plazo");
  if (plazoRaw === null) {
    console.log("plazo es null");
  } else {
    console.log("plazo tiene valor:", plazoRaw);
  }

  const interesRaw = formData.get("interes");
  if (interesRaw === null) {
    console.log("interes es null");
  } else {
    console.log("interes tiene valor:", interesRaw);
  }

  const fechaInicioRaw = formData.get("fecha-inicio");
  if (fechaInicioRaw === null) {
    console.log("fecha-inicio es null");
  } else {
    console.log("fecha-inicio tiene valor:", fechaInicioRaw);
  }

  // (Se mantiene del ejercicio 2) convertir numéricos e imprimir
  const precioVivienda = parseFloat(precioViviendaRaw);
  const porcentajeFinanciacion = parseFloat(porcentajeFinanciacionRaw);
  const plazo = parseFloat(plazoRaw);
  const interes = parseFloat(interesRaw);

  console.log(precioVivienda);
  console.log(porcentajeFinanciacion);
  console.log(plazo);
  console.log(interes);
  console.log(fechaInicioRaw);

  // --- Ejercicio 3.2: Crear array de errores ---
  const errors = [];
  errors.push("Precio requerido");
  errors.push("Plazo requerido");
  console.log(errors);

  // --- Ejercicio 3.3: Valores por defecto usando OR ---
  const fechaActualISO = new Date().toISOString();
  const fechaInicio = fechaInicioRaw || fechaActualISO;
  const porcentajeFinanciacionFinal = porcentajeFinanciacionRaw || "80";

  console.log("fechaInicio final:", fechaInicio);
  console.log("porcentajeFinanciacion final:", porcentajeFinanciacionFinal);

  // --- Ejercicio 3.4: undefined y null ---
  const valorIndefinido = undefined;
  const valorNulo = null;

  console.log(valorIndefinido);
  console.log(valorNulo);
}

document.addEventListener("DOMContentLoaded", init);
