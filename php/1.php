<h1>Funciones con Cadena</h1>
<?php
    echo strlen("Hola mundo desde php"); // La cantidad de valores que contiene una cadena
    echo "<hr>";
    $cadena="  Hola mundo   ";
    echo trim($cadena);
    echo "<hr>";
    echo str_word_count("Hola mundo desde php"); // contador de palabras
    echo "<hr>";
    $cadena="Hola mundo desde php";
    echo strrev($cadena); // sirve para invertir todos los valores
    echo "<hr>";
    echo strpos("hola mundo desde php", "mundo"); //Sirve para buscar la posición de una palabra
    echo "<hr>";
    echo str_replace("mundo", "planeta", "Hola mundo"); // Sirve para reemplazar una palabra por otra
    echo "<hr>";
    echo (pi()); //devuelve el valor de pi
    echo "<hr>";
    echo (min(0, 150, 30, 85, -10, -100));  //devuelve el valor mínimo de una lista de numeros
    echo "<hr>";
    echo (max(0, 150, 30, 85, -10, -100));  //devuelve el valor máximo de una lista de numeros
    echo "<hr>";
    echo "<h1>Funciones Constantes</h1>";
    define("NOMBREONSTANTE", "Bienvenidos al curso de PHP"); //definir primero el nombre y luego el valor
    echo NOMBREONSTANTE;
    echo "<hr>";
    define("autos", ["BMW", "Audi", "Volvo", "Kia"]); //constante array
    echo autos[3]; //acceder a un elemento kia

?>