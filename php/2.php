<h1>Condicionales en php</h1>
<h2>Condicional if</h2>
<?php
    /*
    if(condición){
        bloque de instrucciones
    }else{
        otro bloque de instrucciones
    }
    elseif(condición){
        bloque de instrucciones
    }
    */
    $hora=date("H");
    if($hora<"19"){
        echo "Que tengas un buen día";
    }
?>
<hr>
<h2>Condicional if else</h2>
<?php
    if ($hora<"19"){ 
        echo "Que tengas un buen día";
    } else {
        echo "Que tengas una buena noche";
    }
?>
    <hr>
    <h2>Condicional elseif</h2>
<?php
    if ($hora<"10"){
        echo "Que tengas un buen día";
    } elseif($hora<"20"){
        echo "Que tengas una buena tarde";
    }else{
        echo "Que tengas una buena noche";
    }
?>
    <hr>
    <h2>Switch</h2>
<?php
    $color="rojo";
    switch($color){
        case "rojo":
            echo "Mi color favorito es rojo";
            break;
        case "azul":
            echo "Mi color favorito es azul";
            break;
        case "verde":
            echo "Mi color favorito es verde";
            break;
        default:
            echo "Mi color favorito no esta entre esas opciones";
    }
?>