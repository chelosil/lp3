/* Array arreglos multidimensionales
Predeterminadas en js */

'use strict'

var categorias = ["Z","X","Acción", "Comedia", "Terror"];
var peliculas = ["Peli de acción", "Peli comedia", "Peli terror"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

// Operaciones con array
// Añadir elementos push
peliculas.push("Batman");
console.log(peliculas);

// Quitar elementos pop
peliculas.pop();
// peliculas.pop();
// peliculas.pop();
console.log(peliculas);

// 1.3 Añadir elementos con prompt
var elemento = "";
do {
  elemento = prompt("Introduce una peli");
  peliculas.push(elemento);
} while (elemento != "PARAR");

// 1.4 Recorrer array y mostrar valores en pantalla
peliculas.forEach(pelis => {
  document.write("peliculas: " + pelis + "<br>");
});

// 2 Convertir array en texto
var pelistring = peliculas.join();
console.log(typeof(pelistring),pelistring);

// 3 Convertir texto a array
var cadena = "Texto1, texto2, texto3";
console.log(cadena.split());

// 4 Ordenar array en orden alfabético sort
categorias.sort();
console.log(categorias);

// 5 Invertir orden reverse
peliculas.reverse();
console.log(peliculas);