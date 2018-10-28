function Calcular() {
  var vector = new Array(10);

  for (var i = 0; i < vector.length; i++) {
   vector[i] = Math.round(Math.random() * (1000 - 100)) + 100;
  }
}
