/* Ejercicios arrays */

'use strict'

/*
Crear un programa que:
1- Pida 6 nros ingresados por pantalla
2- Mostrar el array entero en el cuerpo de la página y consola
3- Mostrar array ordenado
4- Invertir el orden y mostrarlo
5- Mostrar cuantos elementos tiene
6- Buscar un valor introducido por el usuario y que nos muestre también su índice
*/

var numeros = new Array(6);

for (var i = 0; i < numeros.length; i++) {
  numeros[i] = parseInt(prompt("Introduce nros"));
}

document.write("<h1>Contenido del array</h1>");
var resultado = numeros.forEach(valores => {
  document.write("<ul>");
  document.write("<li>" + valores + "</li>");
  document.write("</ul>");
});

console.log(numeros);

// mostrar y ordenarlo
var ordenar = numeros.sort(function(a, b) { return a - b });
console.log(ordenar);

// Invertir el orden y mostrarlo
numeros.reverse();
// Utilizar función creada anteriormente
mostrarArray(numeros, " En orden reverso");

// Mostrar cuantos elementos tiene
document.write("<h1>El array tiene: " + numeros.length + " elementos </h1>");

// Buscar un valor introducido por el usuario y que nos muestre también su índice
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numeros => numeros == busqueda);
var valor = numeros.find(numeros => numeros == busqueda);
if (posicion && posicion != -1) {
  document.write("El valor es: " + valor + " y la posición está en: " + posicion);
} else {
  document.write("No encontrado o no es un nro");
}