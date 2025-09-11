<h1>estructura while</h1>
<?php
    /*
        while(condición){
            bloque de instrucciones
            iterador ++;
        }
    */
    $x = 1;
    while($x <= 5){
        echo "El número es: $x <br>";
        $x++;
    }
    echo "<h1>estructura while</h1>";

    $variable = 0;
    while($variable <= 100){
        echo "El número es: $variable <hr>";
        $variable +=10;
    }
    /*
    do{
    }while(condición);}
    
    */
    echo "<h1>estructura do while</h1>";
    $z = 1;
    do{
        echo "El número es: $z <br>";
        $z++;
    }while($z <= 5);

        echo "<h1>estructura do while2</h1>";
    $z = 1;
    do{
        echo "El número es: $z <br>";
        $z+=10;
    }while($z <= 100);
?>