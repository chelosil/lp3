/* Eventos
Son funciones que se ejecutan cada vez que se realiza algo
eje: movimientos del ratón, teclado, borrar, etc */

//Corregir llamar en las etiquetas correspondientes al script.js
window.addEventListener('load', () => {
  // 1
  var boton2 = document.querySelector("#boton2");

  // 2
  function cambiarColor() {
    var bg = boton2.style.background;
    if (bg == "green") {
      boton2.style.background = "red";
    } else {
      boton2.style.background = "green";
    }
  }

  // 3 Evento clic
  var boton3 = document.querySelector("#boton3");
  boton3.addEventListener('click', function () {
    cambiarColor();
  });

  // 5 Mouse out
  boton3.addEventListener('mouseout', function () {
    boton3.style.background = "yellow";
  });

  // 6 Evento focus
  var input = document.querySelector("#nombre");
  input.addEventListener('focus', function () {
    console.log("Estás haciendo focus en este input");
  });

  // 7 Evento blur
  input.addEventListener('blur', function () {
    console.log("Estás FUERA DEL INPUT");
  });

  // 8 keydown al escribir dentro de un input
  input.addEventListener('keydown', function () {
    console.log("Estas pulsando la tecla: ", String.fromCharCode(event.keyCode));
  });

  // 9 keypress
  input.addEventListener('keypress', function (event) {
    console.log("Tecla presionada con keypress", String.fromCharCode(event.keyCode));
  });

  // keyup
  input.addEventListener('keyup', function (event) {
    console.log("Tecla soltada es: ", String.fromCharCode(event.keyCode));
  });

});  //fin del onload