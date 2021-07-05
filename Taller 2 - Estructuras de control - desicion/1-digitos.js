let N = parseInt(prompt("Ingrese el valor"));

if (N >= 0) {
    if (N < 10) {
        alert("El numero " + N + " tiene 1 digito");
    } else if (N < 100) {
        alert("El numero " + N + " tiene 2 digitos");
    } else if (N < 1000) {
        alert("El numero " + N + " tiene 3 digitos");
    } else if (N < 10000) {
        alert("El numero " + N + " tiene 4 digitos");
    } else {
        alert("El numero " + N + " tiene mas de 4 digitos");
    }
} else {
    alert("El numero es negativo")
}