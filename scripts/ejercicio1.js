function Calcular() {
  var numero1 = parseInt( document.getElementById("numero1").value );
  var numero2 = parseInt( document.getElementById("numero2").value );
  var numero3 = parseInt( document.getElementById("numero3").value );

  var arreglo = [numero1, numero2, numero3];
  var acumDivisor = new Array(3);
  acumDivisor[0] = 0;
  acumDivisor[1] = 0;
  acumDivisor[2] = 0;
  var aux;
  var sumAcum = 0;
  for(var i = 0; i < arreglo.length; i++)
  {
    for(var j = 1; j <= arreglo[i]; j++)
      if(arreglo[i] % j == 0)
      {
        sumAcum = sumAcum + 1;
      }
    acumDivisor[i] = sumAcum;
    sumAcum = 0;
  }

  for(var i = 0; i < acumDivisor.length; i++)
  {
    for(var j = i+1; j < acumDivisor.length; j++)
    {
      if (acumDivisor[j]<acumDivisor[i])
      {
        aux = acumDivisor[j];
        acumDivisor[j] = acumDivisor[i];
        acumDivisor[i] = aux;

        aux = arreglo[j];
        arreglo[j] = arreglo[i];
        arreglo[i] = aux;
      }
    }
  }

    document.getElementById("txtNumero1").innerHTML = arreglo[2];
    document.getElementById("txtNumero2").innerHTML = arreglo[1];
    document.getElementById("txtNumero3").innerHTML = arreglo[0];
    document.getElementById("txtDivNumero1").innerHTML = acumDivisor[2];
    document.getElementById("txtDivNumero2").innerHTML = acumDivisor[1];
    document.getElementById("txtDivNumero3").innerHTML = acumDivisor[0];


}
