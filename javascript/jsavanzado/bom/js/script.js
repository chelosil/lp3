/* BOM
Browser Object Model
Manipular el navegador y obtener datos */

// 1- Tamaño ancho de la ventana del navegador
console.log(window.innerWidth, "Ancho de la página");

// 2- Alto del navegador
console.log(window.innerHeight, "Alto del navegador");

// 3- Crear una función para traer el ancho y alto del navegador
function traerbom(ancho, largo) {
  var ancho = console.log(window.innerWidth, "Ancho de la página con una función");
  var alto = console.log(window.innerHeight, "Alto del navegador con una función");
}

traerbom();

// 4- Traer el tamaño real del monitor o dispositivo
console.log(screen.width, "Ancho de la página");
console.log(screen.height, "Alto de la pg");

// 5-Traer url
console.log(window.location, "Esto es la url donde estás ahora");

//6-Funcion para redireccionar a otra url
function redirect(url){
  window.location.href=url;
}
redirect(url);

//abrir otra ventana del navegador
function abrirventana(url){
  window.open(url,"","width=800, heigth=400");
}
abrirventana(url);