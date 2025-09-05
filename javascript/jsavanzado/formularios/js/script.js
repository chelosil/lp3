window.addEventListener('load', () => {

  $('#nombre').bind('keyup blur', function () {
    var node = $(this);
    node.val(node.val().replace(/[^a-z && A-Z]/g, ''));
  });

  $('#apellido').bind('keyup blur', function () {
    var node = $(this);
    node.val(node.val().replace(/[^a-z && A-Z]/g, ''));
  });

    $('#ci').bind('keyup blur', function(){
    var node=$(this);
    node.val(node.val().replace(/[^0-9]/g, ''));
  });

  document.getElementById('email').addEventListener('input',function(event){
    campo=event.target;
    valido=document.getElementById('emailOK');
    //Profesor:
    //    emailReg = /^[-\w.%+{1,64}@(?:[A-Z0-9-]{1,64}\.){1,50}[A-Z]{2,10}$/i;
    // 
    // Otra forma mas Optimizada:
    // Reglas:
    // - Local-part: átomos separados por un solo punto, sin dobles puntos ni punto al inicio/fin.
    // - Local-part <= 64 chars (lookahead).
    // - Etiquetas de dominio 1–63, sin guión al inicio/fin.
    // - Al menos un punto en el dominio.
    // - TLD final 2–63, permite punycode (letras/dígitos/guión, sin guión al inicio/fin).
    //  const emailReg = /^(?=.{1,64}@)[A-Z0-9_%+-]+(?:\.[A-Z0-9_%+-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])\.)+(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9]))$/i;

    
    emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (emailReg.test(campo.value)) {
      valido.innerText="Email Válido  :)"
    } else{
      valido.innerText="Email Inválido  :("
    }
  });


});