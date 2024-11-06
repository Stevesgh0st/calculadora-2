let pantalla = document.getElementById("pantalla");
let operacionActual = "";
let operador = null;
let numeroAnterior = null;

function agregarNumero(numero) {
  operacionActual += numero;
  actualizarPantalla();
}

function agregarOperador(op) {
  operador = op;
  numeroAnterior = parseFloat(operacionActual);
  operacionActual = "";
}

function agregarDecimal() {
  if (!operacionActual.includes(".")) {
    operacionActual += ".";
    actualizarPantalla();
  }
}

function calcular() {
  let resultado;
  const numeroActual = parseFloat(operacionActual);
  if (operador === "+") {
    resultado = numeroAnterior + numeroActual;
  } else if (operador === "-") {
    resultado = numeroAnterior - numeroActual;
  } else if (operador === "*") {
    resultado = numeroAnterior * numeroActual;
  } else if (operador === "/") {
    resultado = numeroAnterior / numeroActual;
  }
  operacionActual = resultado.toString();
  operador = null;
  numeroAnterior = null;
  actualizarPantalla();
}

function borrar() {
  operacionActual = "";
  operador = null;
  numeroAnterior = null;
  actualizarPantalla();
}

function actualizarPantalla() {
  pantalla.value = operacionActual;
}
