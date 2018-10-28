function Calcular(){
  var nVector = parseInt(document.getElementById("numero").value);
  var vector = new Array(nVector);
  var texto = "";
  var posicion = 0;
  var divisibles;

  for(var i = 0; posicion < nVector; i++) {
    divisibles = 0;
    for(var j=1; j <= i; j++) {
      if(i%j == 0) {
        divisibles++;
      }
    }
    if(divisibles == 2) {
      vector[posicion] = i;
      posicion++;
    }
  }

  for(var i = 0; i < nVector; i++) {
    texto = (texto+" "+vector[i]);
  }
  document.getElementById("txtNumerosTitulo").innerHTML = "<b>Numeros primos para el vector de</b> "+nVector+" posiciones";
  document.getElementById("txtNumerosPrimos").innerHTML = texto;


}
