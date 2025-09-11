<html>
<h1>Recibir valores por el metodo POST</h1>

<body>
  <?php
    if(isset($_POST['nombre']) && isset($_POST['email'])) {
      $nombre = $_POST['nombre'];
      $email = $_POST['email'];
    } else {
      echo "No se ha ingresado nombre o email";
    }
  ?>
  Hola: <?php echo $nombre; ?> <br>
  Tu email es: <?php echo $email; ?>
</body>
</html>
