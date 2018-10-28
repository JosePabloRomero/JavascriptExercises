function Calcular() {
  var nVector = parseInt(document.getElementById("numero").value);
  var vector = new Array(nVector);
  var promedioTotal = 0;
  var promedioMayores = 0;
  var contadorMayores = 0;
  var posicion = "";

  for (var i = 0; i < vector.length; i++) {
    vector[i] = parseInt(prompt("Ingrese el numero "+(i+1)));
  }

  for (var i = 0; i < vector.length; i++) {
    promedioTotal += vector[i];
  }
  promedioTotal /= nVector;

  for (var i = 0; i < vector.length; i++) {
    if (vector[i]>promedioTotal) {
      promedioMayores += vector[i];
      posicion += (" "+i);
      contadorMayores++;
    }
  }
  document.getElementById("txtNumerosTitulo1").innerHTML = "<b>Suma total de los numeros mayores al promedio total del arreglo</b>";
  document.getElementById("txtNumerosSuma").innerHTML = promedioMayores;
  promedioMayores /= contadorMayores;

  document.getElementById("txtNumerosTitulo2").innerHTML = "<b>Promedio de los numeros mayores al promedio</b>";
  document.getElementById("txtNumerosPromedio").innerHTML = promedioMayores;

  document.getElementById("txtNumerosTitulo2").innerHTML = "<b>Posiciones en donde se encuentran los numeros mayores al promedio</b>";
  document.getElementById("txtNumerosPromedio").innerHTML = posicion;
}
