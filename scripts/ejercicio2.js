function Calcular() {
  var numeros = new Array(10);
  var acumDivisor = new Array(10);
  var contadorPrimos = 0;
  var primo = true;
  var termino = false;
  var aux;
  var sumAcum = 0;
  var sumPrimos = 0;
  for (var i = 0; i < numeros.length && !termino ; i++ )
  {
    numeros[i] = parseInt(prompt("Ingrese el numero "+(i+1)));
    if (numeros[i] == null)
    {
      termino = true;
      document.write("<b>Alerta :</b> Debe de volver a ingresar todos los numeros, puesto que ingresó un dato de tipo nulo");
    }
  }
  for(var i = 0; i < numeros.length; i++)
  {
    for(var j = 1; j <= numeros[i]; j++)
    {
      if(numeros[i] % j == 0)
      {
        sumAcum = sumAcum + 1;
      }
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

        aux = numeros[j];
        numeros[j] = numeros[i];
        numeros[i] = aux;
      }
    }
  }
  document.getElementById("txtTextoDivisores").innerHTML = "El numero con mas divisores es: ";
  document.getElementById("txtDivisores").innerHTML = numeros[9];
  document.getElementById("txtTextoPrimos").innerHTML = "El numero de primos encontrados fue: ";
  for(var i = 0; i < numeros.length; i++)
  {
    for(var j = 1; j < numeros[i]; j++)
    {
      if(numeros[i]/j == Math.round(numeros[i]/j) && j!=1 && j!=numeros[i])
      {
        primo = false;
        break;
      }
      else
      {
        primo = true;
      }
    }
    if (primo && numeros[i] != 1) {
      contadorPrimos = contadorPrimos + 1;
    }
  }
  document.getElementById("txtPrimos").innerHTML = contadorPrimos;
}
