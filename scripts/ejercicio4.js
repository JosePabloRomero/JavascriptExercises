function Calcular(){
  var nVector;
  var texto= "";
  nVector = parseInt(prompt("Ingrese el tamaño de los vectores"));
  var vector1 = new Array(nVector);
  var vector2 = new Array(nVector);
  var vector3 = new Array(nVector);

  for (var i = 0; i < vector1.length; i++)
  {
    vector1[i] = parseInt(prompt("Ingrese el numero "+(i+1)+" para el vector 1"));
    vector2[i] = parseInt(prompt("Ingrese el numero "+(i+1)+" para el vector 2"));
  }

  for (var j = 0; j < nVector; j ++)
  {
    if(vector1[j]>vector2[j])
    {
      vector3[j] = vector1[j];
    } else {
      vector3[j] = vector2[j];
    }
  }
  document.getElementById("txtNumerosTitulo1").innerHTML = "<b>Numeros ingresados en el vector 1: </b> ";
  for (var i = 0; i < vector1.length; i++)
  {
    texto = (texto+" "+vector1[i]);
  }
  document.getElementById("txtNumeros1").innerHTML = texto;
  texto = "";

  document.getElementById("txtNumerosTitulo2").innerHTML = "<b>Numeros ingresados en el vector 2: </b>";
  for (var i = 0; i < vector2.length; i++)
  {
    texto = (texto+" "+vector2[i]);
  }
  document.getElementById("txtNumeros2").innerHTML = texto;
  texto = "";

  document.getElementById("txtNumerosTitulo3").innerHTML = "<b>Vector con los numeros mayores en cada posicion del vector respectivamente</b>";
  for (var i = 0; i < vector3.length; i++)
  {
    texto = (texto+" "+vector3[i]);
  }
  document.getElementById("txtNumeros3").innerHTML = texto;

}
