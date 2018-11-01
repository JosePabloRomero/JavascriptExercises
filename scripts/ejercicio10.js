function calcular() {
var sumaPer = 0;
var sumaCapi = 0;
var sumaGen = 0;
var acumDivi = 0;
var n;
var vector = new Array (10);
var text = "";
var nx = 0;
var aux = 0;
var residuo = 0;
var reves = 0;
var text1 = "";
var textos = "";

for (var i = 0; i < vector.length; i++) {
  vector[i] = Math.round(Math.random()* (1000 - 100)) + 100;
  textos+= (" "+vector[i]);
}
document.getElementById("mostrarNumeros").innerHTML = textos;

for (var i = 0; i < vector.length; i++) {
  n = vector [i];
  acumDivi = 0;
  for ( var j = 1 ; j < n ; j++){
    acumDivi = 0;
    if (n % j == 0){
      acumDivi = acumDivi + j;
    }    
  }
 if (acumDivi == n){
   sumaPer = sumaPer + n;
   text = (text + "--" + n);
 }
 
}
document.getElementById("TXTnumerosper").innerHTML = "<b>Los numeros perfectos son: </>";
document.getElementById("numerosper").innerHTML = text;

for (var i = 0; i < vector.length; i++) {
  nx = vector[i];
  aux = vector [i];
  while (nx > 0) {
    residuo = nx % 10;
    reves = (reves * 10) + residuo;
    nx = Math.trunc(nx / 10);
    }
    if (reves == aux) {
      sumaCapi = sumaCapi + aux;
      text1 = (text1 + "#" + aux);
    }
    reves = 0; 
    residuo = 0;

  }

  document.getElementById("TXTnumeroscapi").innerHTML = "<b>Los numeros capicuas son : </>";
  document.getElementById("numroscapi").innerHTML = text1;

  sumaGen = sumaCapi + sumaPer;
  document.getElementById("TXTsuma").innerHTML = "<b>La suma de los numeros capicuas y perfectos es de : </>";
  document.getElementById("suma").innerHTML = sumaGen;
}
