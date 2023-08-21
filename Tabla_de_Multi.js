function tablaMultiplicar(numero, limite) {
    for (var i = 1; i <= limite; i++) {
        console.log("".concat(numero, " x ").concat(i, " = ").concat(numero * i));
    }
}
var numeroTabla = parseInt(prompt("Ingrese el número para la tabla de multiplicar:"));
var limiteTabla = parseInt(prompt("Ingrese el límite de la tabla de multiplicar:"));
tablaMultiplicar(numeroTabla, limiteTabla);
