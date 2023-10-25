var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));
var resultadoElement = document.getElementById("comparacion");

if (numero1 === numero2 && numero2 === numero3) {
    
     document.getElementById("comparacion").innerHTML = "Los números son iguales: " + numero1;
  } else {
    // Identificar el número mayor
    var mayor = Math.max(numero1, numero2, numero3);
    // Identificar el número del centro
    var centro = numero1 + numero2 + numero3 - mayor - Math.min(numero1, numero2, numero3);
    // Identificar el número menor
    var menor = Math.min(numero1, numero2, numero3);
     
     document.getElementById("comparacion1").innerHTML = "Ordenados de mayor a menor: " + mayor + ", " + centro + ", " + menor;
  
     document.getElementById("comparacion2").innerHTML = "Ordenados de menor a mayor: " + menor + ", " + centro + ", " + mayor;
  }