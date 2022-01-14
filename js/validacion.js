
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario_de_contacto").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('input_nombre_apelido').value;
  if (nombre.length == 0) {
    alert('debe ingresar su nombre para poder contactarlo');
    return;
  }
  var email = document.getElementById('input_email').value;
   if (email.indexOf("@") < 4) {
    alert('el email ingresado no es valido');
    return;
  }

  var telefono = document.getElementById('input_telefono_de_contacto').value;
  if (telefono.length < 8) {
    alert('debe ingresar un telefono de contacto valido');
    return;
  }
  var consulta = document.getElementById('input_consulta').value;
  if (consulta.length < 10) {
    alert('debe ingresar la colsulta que debe realizarnos');
    return;
  }
  this.submit();
}


  //input_telefono_de_contacto
  //input_consulta