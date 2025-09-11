<?php
/* Conexión php con mysql */
// Establecer variables del servidor de bd
$host = 'localhost';
$vuser = 'root';
$vpass = '';
$vbd = 'pruebamysqlphp';

$conexion = mysqli_connect($host, $vuser, $vpass, $vbd);

if (mysqli_connect_errno()) {
    echo "La conexión a la bd no se pudo establecer, mirar el error: " . mysqli_connect_errno();
} else {
    echo "La conexión a la bd: $vbd fue exitosa";
}
