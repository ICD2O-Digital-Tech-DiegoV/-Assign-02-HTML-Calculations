function doMathClicked() {
  // this function does basic math
  let Mph = document.getElementById("Mph").value;
  let Kph = Mph * 1.60;
  let answer = Mph * 1.60;
  
  document.getElementById("Kph").innerHTML = Mph + " * 1.60 = " + answer.toFixed(2);

}