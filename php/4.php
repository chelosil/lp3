<h1>estructura for</h1>
<?php
/*
        for(variable iteradora; condición variable; incremento++){
            bloque de instrucciones
        }
    */
for ($i = 0; $i <= 10; $i++) {
    echo "El número es: $i <br>";
}

echo "<h1>estrura Foreach para recorrer matrices, obteniendo los valores</h1>";
$colores = array("rojo", "verde", "azul", "amarillo");
foreach ($colores as $valores) {
    echo "$valores <br>";
}

echo "<h1>Break para parar la ejecución</h1>";
for ($a = 0; $a < 10; $a++) {
    if ($a == 5) {
        break;
    }
    echo "El nro es: $a <br>";
}

echo "<h1>Continue para parar la ejecución</h1>";
for ($b = 0; $b <= 10; $b++) {
    if ($b == 5) {
        continue;
    }
    echo "El nro es: $b <br>";
}
?>