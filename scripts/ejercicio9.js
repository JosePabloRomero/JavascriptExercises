function Calcular() {
  var vector = new Array(10);
  var aux;
  var texto = "";

  for (var i = 0; i < vector.length; i++) {
   vector[i] = Math.round(Math.random() * (1000 - 100)) + 100;
  }

  for (var i = 0; i < vector.length; i++) {
    for (var j = i+1; j < vector.length; j++) {
      if (vector[j]>vector[i]) {
        aux = vector[j];
        vector[j] = vector[i];
        vector[i] = aux;
      }
    }
  }

  for (var i = 0; i < vector.length; i++) {
    texto = (texto+" # "+vector[i]);
  }
  document.getElementById("txtNumerosTitulo1").innerHTML = "<b>Lista de numeros aleatorios ordenados de menor a mayor: </>";
  document.getElementById("txtNumeros").innerHTML = texto;
}
