<h1>Funciones</h1>
<?php
/*
function NombreDeLaFuncion (parametros){
  instrucciones de código;
}
*/

function holamundo() {
  echo "Hola mundo desde una función!";
}

holamundo(); // llamar a la función

echo "<h1>Funciones pasándole argumentos</h1>";
function NombreFamiliar($nombre) {
  echo "El nombre del familiar es: <strong>$nombre</strong><br>";
}

// Utilizar o llamar a la función
NombreFamiliar("Juan");
NombreFamiliar("María");
NombreFamiliar("Liliana");

echo "<h1>Funciones pasándole 2 argumentos</h1>";
function NombreAño($vnombre, $año) {
  echo "$vnombre su año de nacimiento es: $año<br>";
}
NombreAño("Sonia", "1994");
NombreAño("Raquel", "1998");
NombreAño("Julio", "1988");

echo "<h1>Función de suma de valores</h1>";
function SumaNros(int $nro1, int $nro2) {
  return $nro1 + $nro2;
}
echo "La suma es: " . SumaNros(10, 5);

?>