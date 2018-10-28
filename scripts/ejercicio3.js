function Calcular(){
  var nVector;
  var texto = "";
  var textPosition = "";
  nVector = parseInt(prompt("Ingrese el tamaño del vector"));
  var vector = new Array(nVector);
  for ( var i = 0; i < vector.length; i++ )
  {
    vector[i] = parseInt(prompt("Ingrese el numero "+(i+1)));
  }

  document.getElementById("txtNumerosTitulo").innerHTML = "<b>Numeros que termian en 7, en posiciones impares: </b> ";

  for( var i = 0; i < vector.length; i ++ )
  {
    if( i % 2 !== 0 )
    {
      if( vector[i] % 10 == 7 )
      {
        texto = (texto+vector[i]+" ");
        textPosition = (textPosition+i+" ");
      }
    }
  }
  document.getElementById("txtNumeros").innerHTML = texto;
  document.getElementById("txtNumerosTituloP").innerHTML = "<b>Posicion en el vector de dichos numeros: </b>";
  document.getElementById("txtPosiciones").innerHTML = textPosition;
}
