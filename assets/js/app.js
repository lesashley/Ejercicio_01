
function show() {
  var name = document.getElementById("nombre").value;
  var lastname = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;
  var direction = document.getElementById("direccion").value;
  var mensaje =  "<ul><li>Nombre: " + name + "<br>" +
                "<li>Apellidos :" + lastname + "<br>" +
                "<li>DNI: " + dni + "<br>"+
                "<li>Dirección: " + direction + "</ul>";
  document.getElementById("text").innerHTML = mensaje;
}
