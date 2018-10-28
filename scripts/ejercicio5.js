function Calcular() {
  var nVector;
  var contadorPrimos = 0;
  var primo = true;
  var texto = "";
  var textoP = "";
  nVector = parseInt(prompt("Ingrese el tamaño del vector"));
  var vector = new Array(nVector);

  for(var i = 0; i < vector.length; i++){
    vector[i] = parseInt(prompt("Ingrese el numero "+(i+1)));
  }

  for(var i = 0; i < vector.length; i++) {
    for(var j = 1; j < vector[i]; j++){
      if(vector[i]/j == Math.round(vector[i]/j) && j != 1 && j != vector[i]) {
        primo = false;
        break;
      } else {
        primo = true;
      }
    }
    if (primo && vector[i] != 1) {
      contadorPrimos = contadorPrimos + 1;
      texto = (texto+" "+vector[i]);
      textoP = (textoP+" "+i);
    }
  }

  document.getElementById("txtNumerosTitulo1").innerHTML = "La cantidad de primos encontrados en el vector fue de: " ;
  document.getElementById("txtCantidadPrimos").innerHTML = contadorPrimos ;
  document.getElementById("txtNumerosTitulo2").innerHTML = "Los numeros Primos encontrados fueron los siguientes: ";
  document.getElementById("txtNumerosPrimos").innerHTML = texto;
  document.getElementById("txtNumerosTitulo3").innerHTML = "Las posiciones de dichos numeros en el vector, respectivamente son: ";
  document.getElementById("txtPositionNumeros").innerHTML = textoP;
}
