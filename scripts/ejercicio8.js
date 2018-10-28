function Calcular() {
  var vector = new Array(10);
  var vectorSum = new Array(10);
  var texto = "";
  var textoSum = "";
  var cifraTres = 0;
  var cifraDos = 0;
  var cifraUno = 0;

  for(var i = 0; i < vector.length; i++) {
    vector[i] = Math.round(Math.random() * (1000 - 100)) + 100;
  }

  for (var i = 0; i < vector.length; i++) {
    texto += (" "+vector[i]);
  }

  for (var i = 0; i < vector.length; i++) {
    cifraTres = vector[i]%10;
    vector[i] = Math.trunc(vector[i]/10);
    cifraDos = vector[i]%10;
    vector[i] = Math.trunc(vector[i]/10);
    cifraUno = vector[i]%10;
    vectorSum[i] = (cifraUno+cifraDos+cifraTres);
    textoSum += (" "+vectorSum[i]);
  }
  document.getElementById("txtNumerosTitulo1").innerHTML = "Numeros aleatorios de tres cifras: ";
  document.getElementById("txtNumeros").innerHTML = texto;
  document.getElementById("txtNumerosTitulo2").innerHTML = "Suma de las cifras de cada uno: ";
  document.getElementById("txtNumerosSuma").innerHTML = textoSum;
}
