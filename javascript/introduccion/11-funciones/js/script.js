/* Funciones
Conjunto de instrucciones que se ejecutan cuando se las llama */

// Definir una función
function calculadora() {
    var mensaje = alert("Hola soy una función, me tienes que llamar para que funcione");
}

// Llamar a la función
calculadora();

// Función donde se pide ingresar valor
function calcular(n1, n2, mostrar = false) {
    if (mostrar == false) {
        alert("Tienes activarme con true");
    } else {
        var suma = n1 + n2;
        return suma;
    }
}
var nr1 = parseInt(prompt("Ingrese el valor 1"));
var nr2 = parseInt(prompt("Ingrese el valor 2"));
var mostrar = prompt("Mostrar");

alert(calcular(nr1, nr2, mostrar));