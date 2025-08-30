/* Array arreglos
Predeterminadas en js */

'use strict'

// Variable normal
var nombre = "Nelson Bordón";

// Definir un array
var nombres = ["Charly García", "León Gieco", "Gustavo Cerati",
  "Carlos Spinetta", 52, true
];

// Otra forma de establecer un array
var lenguajes = new Array("Java", "PHP", "Javascript", "Python", "C++");

console.log(nombres);
console.log(lenguajes);

// Imprimir un elemento ingresando el número de índice
var seleccion = parseInt(prompt("Qué lenguaje seleccionaras ??", 0));
if (seleccion >= lenguajes.length) {
  alert("Introduce un nro menor, no existe esa posición " + lenguajes.length);
} else {
  alert(lenguajes[seleccion]);
}

// Recorrer un array
// 1- for
document.write("<h1>Imprimir elementos con for</h1>");
document.write("<ul>");

for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");

// 2- foreach recomendada
document.write("<h1>Imprimir elementos con foreach</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, array) => {
  console.log(elemento);
  console.log(indice);
  console.log(array);
  document.write("<li>" + "El índice es: " + indice + "=" + elemento + "</li>");
});
document.write("</ul>");

// 3- Recorrer con for in
document.write("<h1>Imprimir elementos con for in</h1>");
document.write("<ul>");
for (let lenguaje in lenguajes) {
  document.write("<li>" + "El lenguaje es: " + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");