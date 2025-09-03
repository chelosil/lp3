/* Array Búsquedas */

'use strict'

var lenguajes = ["Javascript", "Java", "PHP", "C++", "Python"];

// find
var buscafnd = lenguajes.find(lenguajes => lenguajes == "Java");
console.log(buscafnd);

// findIndex
var buscaindex = lenguajes.findIndex(lenguajes => lenguajes == "PHP");
console.log(buscaindex);

// Búsqueda de valores numéricos con some (devuelve true o false)
var numeros = [10, 30, 50, 80, 90, 100, 30];
var buscaposins = numeros.some(numeros => numeros >= 130);
console.log(buscaposins);

