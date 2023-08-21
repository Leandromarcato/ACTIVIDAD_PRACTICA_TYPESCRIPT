function contadorPalabras(oracion) {
    var palabras = oracion.split(" ").filter(function (word) { return word !== ""; });
    return palabras.length;
}
var inputOracion = prompt("Ingrese una oración:");
var cantidadPalabras = contadorPalabras(inputOracion);
console.log("La cantidad de palabras en la oraci\u00F3n es: ".concat(cantidadPalabras));
