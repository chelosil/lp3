<!DOCTYPE html>
<html>

<body>
    <?php
        // Comentario de línea simple
        /* Comentario extendido */

        // Variable
        $variable = 5;
        echo $variable;

        echo "<hr>"; // Ingresar código HTML en PHP
        $cadena = "Hola mundo desde PHP";
        print $cadena;

        echo "<hr>"; // Ingresar código HTML en PHP
        $cadena2 = "Hola mundo desde PHP";
        echo "<h1>$cadena2</h1>";
        echo "Esto es: ", "String", " Se pueden escribir separados entre ,";

        echo "<hr>";
        $variablebooleana = true;
        var_dump($variablebooleana); // Sirve para saber qué contiene una variable

        echo "<hr>";
        $variabledecimal = 3.14;
        var_dump($variabledecimal);
    ?>

    <h1>Tipo de datos objetos</h1>

    <?php 

        class Auto{
            function Auto(){
                $this->marca="Kia";
                $this->modelo="Picanto";
                $this->motor=2.0;
            }
        }
        $automovil = new Auto();
        echo "Mi auto es un $automovil->marca, modelo $automovil->modelo y motor $automovil->motor";
        echo $automovil->modelo;
        echo $automovil->marca;
        echo "<hr>";
        echo "<h1> Variable null </h1>";
        $x="Hola mundo";
        $x=null;
        var_dump($x);
    ?>

</body>

</html>